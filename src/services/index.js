/**
 * Here it can export functions or classes with corresponding services / endpoints
 * It can always be used the services directly from the specific moduleService file as well.
 * This is to keep a track of all available services as a list. 
 * It makes it easier to maintain and to find the service when there is a long long list as the app gradually scales. 
 */

 export { getAllUsers    } from './userServices';
 export { getUserDetails } from './userServices';