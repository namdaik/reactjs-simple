import React, { Component } from "react";

export default class Breadcrumb extends Component {
    constructor(props) {
        super(props);
        //Khởi tạo một ref
     }
     getBreadHtmlItem() {
        if (this.props.breadcrumb.length) {
             return  this.props.breadcrumb.map((bItem, index) => {
                return  <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
                    <a itemprop="item" href={bItem.link}>
                    <span itemprop="name">{bItem.name}</span></a>
                    <meta itemprop="position" content="{index + 2 }" />
                </li>;
              });
        } else {
          return '';
        }
      }

    render() {
        return (
          <>
            <ol itemscope itemtype="http://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope
                    itemtype="http://schema.org/ListItem">
                  <a itemprop="item" href="/">
                  <span itemprop="name">Home</span></a>
                  <meta itemprop="position" content="1" />
                </li>
                {this.getBreadHtmlItem()}
            </ol>
          </>
        );
    }
}
