import { SYSTEM_ERROR_MESSAGE } from '../config/CONSTANTS';
import { axios } from 'axios';
import { GET_ALL_USERS, GET_USER_DETAILS } from './CONSTANTS';

/**
 * @description - This function is used to get all users
 */

export const getAllUsers = () => {
    console.log('userServices > getAllUsers called...');
    return new Promise((resolve, reject) => {
        try {
        // do an SDK, DB call or API endpoint axios call here and return the promise
            axios
                .get(GET_ALL_USERS())
                .then(response => {
                    console.log('userServices > getAllUsers > response', response);
                    resolve(response.data);
                })
                .catch(error => {
                    console.log('userServices > getAllUsers > error', error);
                    reject( "Error in getAllUsers axios!", error);
                });
        }   
        catch (error) {
            console.log('in userServices > getAllUsers > error===', error);
            reject( SYSTEM_ERROR_MESSAGE);
        }
    });
}

/**
 * @description - This function is used to get user details by userId
 * @param {string} userId - user id
 * early dev example passing Skeleton( static object ) as API response
 */

export const getUserDetails = (userId) => {
    console.log('userServices > getUserDetails called...');
    return new Promise((resolve, reject) => {
        try {
        // do an SDK, DB call or API endpoint axios call here and return the promise
            axios
                .get(GET_USER_DETAILS(userId))
                .then(response => {
                    console.log('userServices > getUserDetails > response', response);
                    resolve(response.data);
                })
                .catch(error => {
                    console.log('userServices > getUserDetails > error', error);
                    reject( "Error in getUserDetails axios!", error);
                });
        }   
        catch (error) {
            console.log('in userServices > getUserDetails > error===', error);
            reject( SYSTEM_ERROR_MESSAGE);
        }
    });
}