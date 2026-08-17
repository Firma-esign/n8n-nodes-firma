import type {
	IDataObject,
	IExecuteSingleFunctions,
	IHttpRequestOptions,
	IN8nRequestOperations,
} from 'n8n-workflow';

/**
 * Page-based pagination for Firma list endpoints.
 * Envelope: { results: [...], pagination: { current_page, page_size, total_count, total_pages } }
 * The page_size param is left untouched so it stays consistent across pages.
 */
export const firmaPagination: IN8nRequestOperations = {
	pagination: {
		type: 'generic',
		properties: {
			continue:
				'={{ !!$response.body?.pagination && $response.body.pagination.current_page < $response.body.pagination.total_pages }}',
			request: {
				qs: {
					page: '={{ $response.body?.pagination?.current_page ? $response.body.pagination.current_page + 1 : 1 }}',
				},
			},
		},
	},
};

/**
 * Assembles request-body parts that declarative field routing cannot express:
 * - document: base64 of the selected binary property (when the operation uploads a file)
 * - recipients: cleaned fixedCollection values (empty strings and order 0 dropped)
 * - settings: collection values passed through as the settings object
 * Parameters absent on the current operation are skipped via fallback values.
 */
export async function buildRequestBody(
	this: IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const body = (requestOptions.body ?? {}) as IDataObject;

	const documentSource = this.getNodeParameter('documentSource', '') as string;
	const binaryProperty = this.getNodeParameter('binaryProperty', '') as string;
	if (binaryProperty && (documentSource === 'binary' || documentSource === '')) {
		const buffer = await this.helpers.getBinaryDataBuffer(binaryProperty);
		body.document = buffer.toString('base64');
	}

	const recipients = this.getNodeParameter('recipients.recipientValues', []) as IDataObject[];
	if (recipients.length) {
		body.recipients = recipients.map((recipient) => {
			const cleaned: IDataObject = {};
			for (const [key, value] of Object.entries(recipient)) {
				if (value === '' || value === undefined || value === null) continue;
				if (key === 'order' && value === 0) continue;
				cleaned[key] = value;
			}
			return cleaned;
		});
	}

	const settings = this.getNodeParameter('settings', {}) as IDataObject;
	if (Object.keys(settings).length) {
		body.settings = settings;
	}

	requestOptions.body = body;
	return requestOptions;
}
