function doPost(e) {
    var lock = LockService.getScriptLock()
    lock.tryLock(10000)

    try {
        // This connects to the spreadsheet the script is attached to
        var doc = SpreadsheetApp.getActiveSpreadsheet()
        var sheetName = 'Emails'
        var sheet = doc.getSheetByName(sheetName)

        if (!sheet) {
            sheet = doc.insertSheet(sheetName);
            sheet.appendRow(['Timestamp', 'Email']);
        }

        var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
        var nextRow = sheet.getLastRow() + 1

        var newRow = headers.map(function (header) {
            return header === 'Timestamp' ? new Date() : e.parameter[header]
        })

        // Check for duplicate email
        var emailIndex = headers.indexOf('Email');
        if (emailIndex !== -1) {
            var email = e.parameter['Email'];
            var data = sheet.getDataRange().getValues();
            for (var i = 1; i < data.length; i++) {
                if (data[i][emailIndex] === email) {
                    return ContentService
                        .createTextOutput(JSON.stringify({ 'result': 'error', 'message': 'Email already exists' }))
                        .setMimeType(ContentService.MimeType.JSON)
                }
            }
        }

        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
            .setMimeType(ContentService.MimeType.JSON)
    }

    catch (e) {
        // Return the error string directly so we can see what happened
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
            .setMimeType(ContentService.MimeType.JSON)
    }

    finally {
        lock.releaseLock()
    }
}
