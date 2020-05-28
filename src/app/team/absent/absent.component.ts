import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { SpreadsheetService } from '../../global/service/google-spreadsheet.service';
import { GtmUtil } from '../../global/util/gtm.util';

@Component({
    selector: 'absent',
    templateUrl: './absent.component.html',
    styleUrls: ['./absent.component.less']
})
export class AbsentComponent implements AfterViewInit {
    // API url for our personal server
    private googleSheetsApiUrl = 'https://nick-proz-node-server.herokuapp.com/sheets/11ijrHoysiIwsFfEggbSNM9Y8VvzU65jeuhQ3vkV5FGw/sheetIndex/0/rows/';
    // API url for our backup server (sheetsu API)
    // private googleSheetsBackupApiUrl = 'https://sheetsu.com/apis/v1.0/7a030ae60b7d';
    private googleSheetsBackupApiUrl = '';

    // Error messages
    private validationErrors: string = 'Please do not leave any required fields blank.';
    private submissionError: string = 'Could not submit the form  due to a server error. Please try again soon or contact the web admins.';

    // GTM variables
    private static gtmEventName: string = 'Absent Form Submit';
    private static gtmVariableName: string = 'absent-form';

    // First name input
    private firstName: string;
    // Last name input
    private lastName: string;
    // Reason input
    private reason: string;
    // Time input
    private time: string;
    // Day input
    private day: number;
    // Month input
    private month: number;
    // Boolean indicating if our form is in the process of submitting (to show our loading icon)
    private formIsSubmitting: boolean = false;
    // Boolean indicating if our form was successfully submitted (to show our success message)
    private submitSuccess: boolean = false;
    // Form errors output
    private formErrors: string;

    // Month dropdown
    @ViewChild('monthDropdown')
    private monthDropdown: ElementRef;

    // Constructor with our http service injected
    constructor(private spreadsheetService: SpreadsheetService) {}

    ngAfterViewInit(): void {
        $(this.monthDropdown.nativeElement).dropdown();
    }

    handleSubmit(event: any, monthInput: number): void {
        event.preventDefault();
        this.month = monthInput;
        this.submitSuccess = false;

        if (!this.formIsValid()) {
            this.formErrors = this.validationErrors;
        } else {
            this.formIsSubmitting = true;
            this.formErrors = null;
            let date = new Date();
            let data = {
                Timestamp: date.toLocaleString(),
                'First Name': this.firstName,
                'Last Name': this.lastName,
                Time: this.time,
                Date: `${this.month}/${this.day}`,
                Reason: this.reason
            };
            this.submitAbsentForm(data);
        }
    }

    /**
     * Submits our form to the spreadsheet by calling our service method.
     * On success, we show our confirmation modal and reset our rsvp modal.
     * On failure, we hide our submitting dialog and show our submission error to the user.
     *
     * @param data - data to submit to our spreadsheet
     */
    private submitAbsentForm(data: any): void {
        // Push our form data to the data layer for Google Tag Manager to consume
        GtmUtil.pushObjectToDataLayer(AbsentComponent.gtmEventName, AbsentComponent.gtmVariableName, data);

        this.spreadsheetService
            .postRowToSpreadsheet(this.googleSheetsApiUrl, this.googleSheetsBackupApiUrl, data)
            .then(() => {
                this.resetForm();
                this.submitSuccess = true;
            })
            .catch(() => {
                this.formIsSubmitting = false;
                this.formErrors = this.submissionError;
            });
    }

    /**
     * Clears our input fields, errors, and resets our form is submitting flag.
     */
    private resetForm(): void {
        this.firstName = null;
        this.lastName = null;
        this.reason = null;
        this.time = null;
        this.day = null;
        this.month = null;
        this.formErrors = null;
        this.formIsSubmitting = false;
    }

    /**
     * Front-end validation for our form.
     * Our form is valid only if all fields are populated.
     *
     * @returns {boolean} - true if the form is valid, false otherwise
     */
    private formIsValid(): boolean {
        return (
            this.firstName != null &&
            this.firstName != '' &&
            this.lastName != null &&
            this.lastName != '' &&
            this.reason != null &&
            this.reason != '' &&
            this.time != null &&
            this.time != '' &&
            this.month != null &&
            this.month > 0 &&
            this.day != null
        );
    }
}
