# Easy Mail Merge — Phase 1 (Manifest V3)

## Prerequisites
- Chrome desktop, Node.js 20+, npm, Google Cloud project.
- A Google account eligible for Gmail API sending.

## Build (required for Excel support)
1. Open terminal in this directory.
2. Run `npm install`.
3. Run `npm run build` to copy the locally bundled XLSX parser to `vendor/`.
4. No CDN or remote JavaScript is used.

## Google Cloud / Chrome OAuth setup
1. In Chrome open `chrome://extensions`, enable Developer mode, click **Load unpacked**, and select this folder. Note the extension ID.
2. In Google Cloud Console create/select a project, enable **Gmail API**.
3. Configure Google Auth Platform branding and audience (External for public consumer accounts), add your account as a test user if in Testing mode.
4. In **Clients / Credentials**, create an OAuth client ID of type **Chrome Extension**, enter the exact extension ID, and copy the client ID.
5. Replace `REPLACE_WITH_GOOGLE_OAUTH_CLIENT_ID.apps.googleusercontent.com` in `manifest.json` with the client ID.
6. Click Reload on `chrome://extensions`. Click the extension toolbar icon to open the dashboard.
7. Connect Gmail and grant `gmail.send` permission. If Google displays an unverified app warning during development, use only approved test accounts; production requires appropriate Google verification.

IMPORTANT: A locally loaded extension ID may change if the extension directory/key changes. For publishing, configure a stable extension ID and production OAuth client; review the Chrome Web Store item ID and OAuth client association.

## Example contacts CSV
```csv
Email,FirstName,Company
alice@example.com,Alice,Acme
bob@example.com,Bob,Example Inc
```
Subject: `Hello {{FirstName}} from Easy Mail Merge`
Message: `<p>Hello {{FirstName}},</p><p>Thanks for your interest in {{Company}}.</p>`

## Safety and limitations
- Sending occurs only while the dashboard remains open; do not close/reload it mid-campaign.
- CSV/XLSX are parsed in the extension. Contact lists are not uploaded to EasyCalculator.org.
- The extension uses only `gmail.send`, so it cannot read sent-mail delivery status, replies, or bounces.
- A successful Gmail API call means accepted for sending, not confirmed delivery.
- Campaign history retains only aggregate counts in Chrome local storage; exported recipient report is generated on demand.
- Test and verify the entire campaign with controlled addresses before production use.
- Never send unsolicited messages. Include required sender identity/unsubscribe options and follow applicable laws and Google policies.
- This is a Phase 1 starter, not an audited production SaaS. No background scheduler, retry persistence, resume-after-tab-close, automatic opt-out suppression, or billing.
- Chrome's identity API handles OAuth tokens. Do not paste credentials into source or publish secrets.

## Development troubleshooting
- `OAuth2 request failed`: check extension ID, Chrome OAuth client ID, consent screen, Gmail API enabled and test-user status.
- `Excel library missing`: run `npm install && npm run build` then reload extension.
- `Gmail 403/429`: account restrictions, quota or rate limit; stop and inspect the Gmail API response. Do not evade limits.
- `No valid unique recipient emails`: verify the email column selection and addresses.

## License
For your own EasyCalculator.org development. Audit and add a suitable public license before publishing.
