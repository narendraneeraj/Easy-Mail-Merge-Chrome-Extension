# Easy Mail Merge 2.0

Chrome Manifest V3 extension using the existing Gmail OAuth client and `gmail.send` only.

## Install

1. Run `npm install` and `npm run build` to create `vendor/xlsx.full.min.js` (required for Excel).
2. In Chrome open `chrome://extensions`, enable Developer mode, select **Load unpacked**, and choose this folder.
3. Ensure the OAuth client is registered for the extension ID used by Chrome. If the ID changes, configure the OAuth client accordingly.
4. Connect Gmail, import CSV/XLSX, import an HTML template, preview, send a test, and start a campaign.

## Important limitations

- Keep the dashboard tab open during sending. Closing it interrupts the run.
- Checkpoint and sent IDs are saved in Chrome local storage; attachments are not persisted. Re-select the same attachments after restarting.
- If a Gmail request is interrupted, delivery can be uncertain. Verify in Gmail Sent before deciding whether to retry.
- On restart, reimport the same contacts/template and choose Start to continue pending recipients.
- Attachments have an 18 MB combined local limit; Gmail's encoded message size limits also apply.
- HTML is sanitized before sending; scripts and embedded frames are removed. Review imported HTML carefully.
- No automatic unsubscribe footer is added. Comply with applicable anti-spam requirements.
- Excel parser is bundled locally; never load remote JavaScript in an MV3 extension.
- Production review: assess third-party XLSX dependency security and upgrade to a maintained parser if needed.
