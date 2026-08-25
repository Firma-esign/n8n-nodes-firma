# n8n-nodes-firma

n8n community node for [Firma.dev](https://firma.dev) — electronic signature and document signing API.

83 operations across 8 resources + a webhook trigger node. Fully declarative, zero runtime dependencies.

## Installation

### Community Nodes (recommended)

1. Go to **Settings > Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-firma`
4. Agree to the risks and select **Install**

### From the Workflow Editor

You can also install the node without leaving your workflow:

1. Open any workflow and click **+** to add a node
2. Search for **Firma** in the node search panel
3. If the node is not yet installed, n8n shows it under **Community Nodes** in the search results with an **Install** option
4. Select it to install and add it to your workflow in one step

### Manual Installation

```bash
cd ~/.n8n/nodes
npm install n8n-nodes-firma
```

Restart n8n after installation.

## Authentication

1. In Firma, go to **Workspace Settings > API**
2. Copy your **API Key**
3. In n8n, create a new **Firma API** credential
4. Paste your API key

The credential defaults to `https://api.firma.dev`. Select **Custom** environment only for self-hosted or staging instances.

### Webhook Secret (optional)

If you plan to use the **Firma Trigger** node, add your webhook secret to the credential for payload signature validation:

1. In Firma, go to **Workspace Settings > Webhooks** (or **Company Settings > Webhooks** for company-level secrets)
2. Enable webhooks if not already enabled. A secret is automatically generated when you turn webhooks on
3. Copy the **Webhook Secret** using the show/copy controls on that page
4. In your n8n Firma API credential, paste the secret into the **Webhook Secret** field

If you need to rotate the secret later, use the **Regenerate** button. Firma keeps the old secret valid for a 7-day grace period, so existing integrations continue working while you update credentials.

Without a secret, the trigger node will still receive events but cannot verify that payloads genuinely came from Firma. See the [Webhooks guide](https://docs.firma.dev/api-reference/webhooks) for full setup, including enabling webhook delivery and configuring event subscriptions.

## Resources and Operations

| Resource | Operations | Description |
|---|---|---|
| **Signing Request** | List, Create, Create and Send, Get, Update (partial/full), Send, Cancel, Resend, Download, Get Audit, Get Users, Get Fields, Get Reminders, Delete, Custom Fields (list/create/delete) | Core signing workflow |
| **Template** | List, Create, Get, Update (partial/full), Delete, Duplicate, Replace Document, Get Fields/Users/Reminders, Custom Fields (list/create/delete) | Reusable document templates |
| **Webhook** | List, Create, Get, Update, Delete, Test, Rotate Secret (company/workspace), Secret Status (company/workspace) | Webhook management |
| **Workspace** | List, Create, Get, Update (partial/full), Get/Update Settings, API Key Regenerate/Expire, Custom Fields (list/create/update/delete) | Workspace administration |
| **Company** | Get, Update (partial/full) | Company-level settings |
| **Domain** | List, Add, Get, Delete, Verify DNS, Verify Ownership, Finalize, Set Primary (company and workspace scopes) | Custom domain management |
| **Email Template** | List, Upsert, Delete (company/workspace), Get Defaults, Get Placeholders | Email template customization |
| **JWT** | Generate/Revoke Template Token, Generate/Revoke Signing Request Token | Embedded editor/signing tokens |

## Trigger Node

The **Firma Trigger** node starts a workflow when a Firma event occurs. It supports all 27 webhook events:

- **Signing Request**: created, sent, viewed, completed, expired, cancelled, deleted, updated, certificate generated, reminder sent, field filled, document updated
- **Recipients**: added, signed, declined, updated, identity changed
- **Templates**: created, updated, deleted, field added, used
- **Workspaces**: created, updated, deleted
- **Domains**: verified, verification failed

### HTTPS Required

Firma's webhook API requires HTTPS URLs. For local development, use a tunnel service:

```bash
# Using cloudflared
cloudflared tunnel --url http://localhost:5678

# Using ngrok
ngrok http 5678
```

### Webhooks Must Be Enabled

Firma gates webhook delivery behind a master switch at both the company and workspace level. If the trigger activates but never receives events, enable webhooks for your workspace in the Firma dashboard (**Workspace Settings > Webhooks**). The per-webhook Test button bypasses this switch, so a successful test does not confirm real events will deliver. See the [Webhooks guide](https://docs.firma.dev/api-reference/webhooks) for details on enabling delivery and managing event subscriptions.

### Signature Validation

If a webhook secret is configured in the credential, the trigger node validates the `X-Firma-Signature` header using HMAC-SHA256. It also supports `X-Firma-Signature-Old` for secret rotation grace periods.

## Important Notes

### No Auto-Retry on Write Operations

Firma's write endpoints (Create, Create and Send, Send, Resend) have no idempotency key. Auto-retrying these operations can create duplicate legally-binding signing requests. Set **Retry On Fail** to **off** for workflows that use these operations.

### Document Upload

Documents are sent as base64-encoded inline JSON, not multipart. When creating a signing request or template from a file, use a binary data node (e.g., Read Binary File) before the Firma node.

### Download Returns a URL

The Download operation returns a signed URL and metadata, not binary data. Use an HTTP Request node to fetch the actual file from the `download_url`.

## Example Workflows

### Send a signing request from a template

1. **Firma** node: Create and Send operation with `template_id`, recipient name and email
2. **Firma Trigger** node: listen for `signing_request.completed`
3. Process the completed signing request data

### Monitor signing progress

1. **Firma Trigger**: listen for `signing_request.recipient.signed`
2. **IF** node: check if all recipients have signed
3. **Firma**: Download the completed document

## Resources

- [Firma API Documentation](https://docs.firma.dev/api-reference)
- [Firma Dashboard](https://app.firma.dev)
- [n8n Community Nodes Documentation](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE)
