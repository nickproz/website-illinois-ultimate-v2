/**
 * Util for interacting with Google Tag Manager (GTM).
 */
export class GtmUtil {

    /**
     * Pushes custom GTM data to the data layer.
     *
     * @param eventName - name of the event. This is the Custom Event name specified in a GTM trigger
     * @param variableName - data layer variable name. This is the Data Layer Variable name in a GTM custom variable
     * @param data - data object to push to GTM. We stringify the object so that it is readable
     */
    public static pushObjectToDataLayer(eventName: string, variableName: string, data: Object): void {
        // Initialize our data layer, if it doesn't already exist
        (<any>window).dataLayer = (<any>window).dataLayer || [];

        // Push our GTM object with the event data passed in
        (<any>window).dataLayer.push({'event': eventName, [variableName]: JSON.stringify(data)});
    }
}
