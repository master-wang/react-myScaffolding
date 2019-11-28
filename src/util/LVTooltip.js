/**
 * tooltip
 *
 * usage:
 *  <Tooltip
 *    title=""
 *    limit=20
 *    sub = {none:'-',tail:'...'} 字符串为空 太长以什么结尾的默认
 *    className=""
 *    render=fun
 *    placement=right
 *  />
 */

import React from 'react';
import { Tooltip } from 'antd';

class UCToolTip extends React.Component {
    // 返回字符串的长度
    stringLLen = (str) => {
        return str.trim().length;
    }
    // 字符串默认的长度，结尾的字符串默认...
    stringEllipsis = (val) => {
        return typeof val;
    }
    // 最终的字符串显示形式
    stringDeal = (title, limit, sub = {none:'-',tail:'...'}) =>{
        if(!title){
            return sub.none;
        }
        if(title.length<limit){
            return title;
        }
        let str = title.substr(0,20);
        return `${str}${sub.tail}`;
        
    }
    render() {
        const {
        title, limit, sub, className, render, ...props
        } = this.props;
        const outOfRange = this.stringLLen(title) > limit;

        const limitTitle = this.stringDeal(title, limit, sub);
        const content = this.getType(render) === 'Function'
        ? render(limitTitle)
        : <span className={className}>{limitTitle}</span>;

        return outOfRange
        ? <Tooltip title={title} {...props}>{content}</Tooltip>
        : content;
    }
}

export default UCToolTip;