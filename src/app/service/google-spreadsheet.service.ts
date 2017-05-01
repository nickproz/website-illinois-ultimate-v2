import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";

/**
 * Service to interact with our Google spreadsheet.
 */
@Injectable()
export class SpreadsheetService {

    // HTTP headers
    private headers = new Headers({'Content-Type': 'application/json'});

    // Constructor with our http service injected
    constructor(private http: Http) {}

    /**
     * Attempts to post the data passed in to our spreadsheet.
     * Rejects the promise if there is an error.
     *
     * @param apiUrl - url of the google sheets API
     * @param backupApiUrl - url of hte google sheets backup API
     * @param data - data to add to our spreadsheet
     * @returns {Promise<JSON>} - Promise holding the successfully posted object, or a rejected promise with an error
     */
    public postRowToSpreadsheet(apiUrl: string, backupApiUrl: string, data: Object): Promise<JSON> {
        return this.http
            .post(apiUrl, data, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(() => this.postRowToSpreadsheetBackup(backupApiUrl, data));
    }

    /**
     * Attempts to post the data passed in to our backup spreadsheet.
     * This is a backup post in case our personal server fails.
     * Rejects the promise if there is an error.
     *
     * @param backupApiUrl - url of hte google sheets backup API
     * @param data - data to add to our spreadsheet
     * @returns {Promise<JSON>} - Promise holding the successfully posted object, or a rejected promise with an error
     */
    public postRowToSpreadsheetBackup(backupApiUrl: string, data: Object): Promise<JSON> {
        return this.http
            .post(backupApiUrl, data, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(SpreadsheetService.handleError);
    }

    /**
     * Handles all rsvp service errors (after our backup call) when interfacing
     * with the google spreadsheet api. We log the error and reject the promise.
     *
     * @param error - Error to log and reject
     * @returns {Promise<any>} - A rejected promise
     */
    private static handleError(error: any): Promise<any> {
        console.error('An error occurred when attempting to send data to our spreadsheet: ', error);
        return Promise.reject(error);
    }
}