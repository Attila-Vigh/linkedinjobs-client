/**
 * All API urls and other constants are defined here.
 * It is recommended to use this file keep a c local copy of the API response to.
 * keep the app running for the UI changes and 
 * make it independent from the network requirements.
 *
 * They need to be categorized and grouped together as:
 *  - Actual endpoint urls
 *  - Local data .json file path.
 * At a moment, only one group should be uncommented.
 * 
 * Other way to do this is to name json files as per service endpoint and use a basepath variable.
 * Toggle this basePath variable between "actual-domain.com/" or "/data/".
 */

//  Actual endpoint. Uncoment below section to use actual data.
//  export const GET_ALL_USERS = () => `https://jsonplaceholder.typicode.com/users`;
//  export const GET_USER_DETAILS = (id) => `https://jsonplaceholder.typicode.com/users/${id}`;

// Local endpoints. Uncoment below section to use local data.
export const GET_ALL_USERS = () => `/data/users.json`;
export const GET_USER_DETAILS = (id) => `/data/user-${id}.json`;