import React, { Component } from 'react';

class History extends Component {
    render() {
        const { data } = this.props;

        if (!data || data.length === 0) {
            return  <div class="d-flex justify-content-center align-items-center vh-100">
                        <div class="p-3 bg-light rounded w-100 text-center">No Data Found!</div>
                    </div>;
        }

        return (
            <div class="container">
                <div class="row">
                    {data.map(item => (
                        <div key={item.id} class="col col-12">
                            <div class="card shadow-sm p-3">
                                <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#55595c"></rect>
                                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                                </svg>
                                <div class="card-body">
                                    <p class="card-text">Call description here</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <small class="text-body-secondary">9 mins</small>
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Bookmark</button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );

    }
}

export default History;