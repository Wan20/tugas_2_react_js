import React, { Component } from "react";

import ListMakanan from "../ListData/ListMakanan"

class MenuMakanan extends Component {
    render() {
        return (
            <div>
                <h3>Daftar Makanan Yang Kami Sediakan : </h3>
                <td>
                    <ListMakanan
                        listImageMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
                    />
                </td>
                <td>
                    <ListMakanan
                        listImageMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                    />
                </td>
                <td>
                    <ListMakanan
                        listImageMakanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"
                    />
                </td>
                <td>
                    <ListMakanan
                        listImageMakanan="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"
                    />
                </td>
                <td>
                    <ListMakanan
                        listImageMakanan="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-AZ5lugqodSGnAY6mpBhVW9CNec3gCsha6g&usqp=CAU"
                    />
                </td>
            </div>
        )
    }
}

export default MenuMakanan;