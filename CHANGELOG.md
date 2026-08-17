# Changelog

## 0.1.1 (2026-08-17)

- Implement Return All pagination for all list operations
- Implement document upload (base64), recipients, and settings body assembly for create operations
- Mask JWT token fields as passwords
- Alphabetize option lists per n8n linting rules
- Switch to OIDC trusted publishing

## 0.1.0 (2026-08-17)

Initial release.

- 83 operations across 8 resources (Signing Request, Template, Webhook, Workspace, Company, Domain, Email Template, JWT)
- Webhook trigger node with 27 event types and HMAC-SHA256 signature validation
- Fully declarative node style with zero runtime dependencies
- Light and dark icon variants
- Orphan webhook recovery in trigger lifecycle
- Published with provenance via GitHub Actions
