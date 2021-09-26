/* Copyright© 2000 - 2021 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0
 * which accompanies this distribution and is available at http://www.apache.org/licenses/LICENSE-2.0.html.*/
import L from 'leaflet';
import { ServiceBase } from './ServiceBase';
import '../core/Base';
import { ImageService as CommonMatchImageService } from '@supermap/iclient-common';

/**
 * @class L.supermap.ImageService
 * @version 10.2.0
 * @constructs L.supermap.ImageService
 * @classdesc 影像服务类
 * @category  iServer Image
 * @extends {L.supermap.ServiceBase}
 * @example
 *      L.supermap.ImageService(url,options)
 *      .getCollections(function(result){
 *          //doSomething
 *      })
 * @param {string} url - 服务地址。例如: http://{ip}:{port}/iserver/{imageservice-imageserviceName}/restjsr/
 * @param {Object} options - 参数。
 * @param {string} [options.proxy] - 服务代理地址。
 * @param {boolean} [options.withCredentials=false] - 请求是否携带 cookie。
 * @param {boolean} [options.crossOrigin] - 是否允许跨域请求。
 * @param {Object} [options.headers] - 请求头。
 */
export var ImageService = ServiceBase.extend({
    initialize: function (url, options) {
        ServiceBase.prototype.initialize.call(this, url, options);
    },

    /**
     * @function L.supermap.ImageService.prototype.getCollections
     * @description 返回当前影像服务中的影像集合列表（Collections）。
     * @param {RequestCallback} callback - 请求结果的回调函数。
     */
    getCollections: function (callback) {
        var me = this;
        var ImageService = new CommonMatchImageService(this.url, {
            proxy: me.options.proxy,
            withCredentials: me.options.withCredentials,
            crossOrigin: me.options.crossOrigin,
            headers: me.options.headers,
            eventListeners: {
                scope: me,
                processCompleted: callback,
                processFailed: callback
            }
        });
        ImageService.getCollections();
    },

    /**
     * @function L.supermap.ImageService.prototype.getCollectionByID
     * @description ID值等于`collectionId`参数值的影像集合（Collection）。 ID值用于在服务中唯一标识该影像集合。
     * @param {string} collectionId 影像集合（Collection）的ID，在一个影像服务中唯一标识影像集合。
     * @param {RequestCallback} callback - 请求结果的回调函数。
     */
    getCollectionByID: function (collectionId, callback) {
        var me = this;
        var ImageService = new CommonMatchImageService(me.url, {
            proxy: me.options.proxy,
            withCredentials: me.options.withCredentials,
            crossOrigin: me.options.crossOrigin,
            headers: me.options.headers,
            eventListeners: {
                scope: me,
                processCompleted: callback,
                processFailed: callback
            }
        });
        ImageService.getCollectionByID(collectionId);
    },
    /**
     * @function L.supermap.ImageService.prototype.search
     * @description 返回与过滤条件匹配的 STAC Items。此方式将作为标准的、全要素查询 API。 如果实现了`GET /search`，那么就必须实现此方法。 如果此端点在服务端实现，需要将其链接添加到 `GET /` 响应中的链接对象数组中， 此端点的链接对象的 `rel`属性值为`search`；链接对象中`method`属性值为`POST` 。
     * @param {SuperMap.ImageSearchParameter} [itemSearch] 查询参数
     * @param {RequestCallback} callback - 请求结果的回调函数。
     */
    search: function (itemSearch, callback) {
        var me = this;
        var ImageService = new CommonMatchImageService(me.url, {
            proxy: me.options.proxy,
            withCredentials: me.options.withCredentials,
            crossOrigin: me.options.crossOrigin,
            headers: me.options.headers,
            eventListeners: {
                scope: me,
                processCompleted: callback,
                processFailed: callback
            }
        });
        ImageService.search(itemSearch);
    }
});

export var imageService = function (url, options) {
    return new ImageService(url, options);
};

L.supermap.imageService = imageService;