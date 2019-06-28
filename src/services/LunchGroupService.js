"use strict";

import HttpService from './HttpService';

export default class LunchGroupService {

    constructor() {
    }

    static baseURL() {
        return "http://localhost:3000/lunchgroups"
    }

    static getLunchGroups() {
        return new Promise((resolve, reject) => {
            HttpService.get(this.baseURL(), function (data) {
                resolve(data);
            }, function (textStatus) {
                reject(textStatus);
            });
        });
    }


        static getLunchGroup(id) {
            return new Promise((resolve, reject) => {
                HttpService.get(`${LunchGroupService.baseURL()}/${id}`, function(data) {
                    if(data != undefined || Object.keys(data).length !== 0) {
                        resolve(data);
                    }
                    else {
                        reject('Error while retrieving lunchgroup');
                    }
                }, function(textStatus) {
                    reject(textStatus);
                });
            });
        }

        static deleteLunchGroup(id) {
            return new Promise((resolve, reject) => {
                HttpService.remove(`${LunchGroupService.baseURL()}/${id}`, function(data) {
                    if(data.message != undefined) {
                        resolve(data.message);
                    }
                    else {
                        reject('Error while deleting');
                    }
                }, function(textStatus) {
                    reject(textStatus);
                });
            });
        }

        static updateLunchGroup(lunch) {
            return new Promise((resolve, reject) => {
                HttpService.put(`${this.baseURL()}/${lunch._id}`, lunch, function(data) {
                    resolve(data);
                }, function(textStatus) {
                   reject(textStatus);
                });
            });
        }

        static createLunchGroup(lunch) {
            lunch.id = Math.floor((Math.random() * 100000000) + 1).toString();
            /*
            lunch.posters = {
                thumbnail: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
                profile: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
                detailed: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg",
                original: "http://resizing.flixster.com/AeDB8hgaGed_TMCcIF1P_gubGwA=/54x81/dkpu1ddg7pbsk.cloudfront.net/movie/11/27/63/11276344_ori.jpg"
            };*/
            return new Promise((resolve, reject) => {
                HttpService.post(LunchGroupService.baseURL(), lunch, function(data) {
                    resolve(data);
                }, function(textStatus) {
                    reject(textStatus);
                });
            });
        }



}