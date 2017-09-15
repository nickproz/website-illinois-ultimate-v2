import { Component, OnInit } from '@angular/core';

import { SpreadsheetService } from "../global/service/google-spreadsheet.service";
import { GtmUtil } from "../global/util/gtm.util";

@Component({
    selector: 'prospective-players',
    templateUrl: './prospective-players.component.html',
    styleUrls: ['./prospective-players.component.less']
})

export class ProspectivePlayersComponent implements OnInit {

    // API url for our personal server
    private googleSheetsApiUrl = 'https://nick-proz-google-sheet-api.herokuapp.com/sheets/11ijrHoysiIwsFfEggbSNM9Y8VvzU65jeuhQ3vkV5FGw/sheetIndex/2/rows/';
    // API url for our backup server (sheetsu API)
    // private googleSheetsBackupApiUrl = 'https://sheetsu.com/apis/v1.0/7a030ae60b7d';
    private googleSheetsBackupApiUrl = '';

    // Error messages
    private validationErrors: string = 'Please do not leave any required fields blank.';
    private submissionError: string = 'Could not submit the form  due to a server error. Please try again soon or contact the web admins.';

    // First name input
    private firstName: string;
    // Last name input
    private lastName: string;
    // Reason input
    private emailAddress: string;
    // Time input
    private hometown: string;
    // Day input
    private highschool: string;
    // Month input
    private major: string;
    // Experience input
    private experience: string;
    // Other Clubs input
    private otherClubs: string;
    // Contact input
    private contact: string = 'Yes';
    // Boolean indicating if our form is in the process of submitting (to show our loading icon)
    private formIsSubmitting: boolean = false;
    // Boolean indicating if our form was successfully submitted (to show our success message)
    private submitSuccess: boolean = false;
    // Form errors output
    private formErrors: string;

    // Constructor with our http service injected
    constructor(private spreadsheetService: SpreadsheetService) {}

    ngOnInit(): void {}

    handleSubmit(event: any): void {
        event.preventDefault();
        this.submitSuccess = false;

        if(!this.formIsValid()) {
            this.formErrors = this.validationErrors;
        } else {
            this.formIsSubmitting = true;
            this.formErrors = null;
            let date = new Date();
            let data = {
                "Timestamp": date.toLocaleString(),
                "First Name": this.firstName,
                "Last Name": this.lastName,
                "Email Address": this.emailAddress,
                "Hometown": this.hometown,
                "Highschool": this.highschool,
                "Major": this.major,
                "Experience": this.experience,
                "Other Clubs": this.otherClubs,
                "Contact Me": this.contact
            };
            this.submitPlayerForm(data);
        }
    }

    /**
     * Submits our form to the spreadsheet by calling our service method.
     * On success, we show our success message.
     * On failure, we hide our submitting dialog and show our submission error to the user.
     *
     * @param data - data to submit to our spreadsheet
     */
    private submitPlayerForm(data: any): void {

        // Push our form data to the data layer for Google Tag Manager to consume
        GtmUtil.pushObjectToDataLayer('Prospect Form Submit', 'prospect-form', data);

        this.spreadsheetService.postRowToSpreadsheet(this.googleSheetsApiUrl, this.googleSheetsBackupApiUrl, data)
            .then(() => {
                this.resetForm();
                this.submitSuccess = true;
            })
            .catch(() => {
                this.formIsSubmitting = false;
                this.formErrors = this.submissionError;
            })
    }

    /**
     * Clears our input fields, errors, and resets our form is submitting flag.
     */
    private resetForm(): void {
        this.firstName = null;
        this.lastName = null;
        this.emailAddress = null;
        this.hometown = null;
        this.highschool = null;
        this.major = null;
        this.experience = null;
        this.otherClubs = null;
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

        return this.firstName != null       && this.firstName != ''
            && this.lastName != null        && this.lastName != ''
            && this.emailAddress != null    && this.emailAddress != ''
            && this.hometown != null        && this.hometown != ''
            && this.highschool != null      && this.highschool != ''
            && this.major != null           && this.major != ''
            && this.experience != null      && this.experience != ''
            && this.otherClubs != null      && this.otherClubs != ''
            && this.contact != null         && this.contact != '';

    }
}
