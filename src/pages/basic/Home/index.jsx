import React, { Component } from "react";
import Navbar from "../../../components/Basic/Navbar";
import Card from "../../../components/Basic/Card";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      limit: 2,
      pageInfo: {}
      // TAMBAHAIN DEFAULT VALUE | FIELD POSTMAN
    };
  }

  componentDidMount() {
    this.getDataMovie();
  }

  getDataMovie = () =>
    axios
      .get(`movie?page=${this.state.page}&limit=${this.state.limit}`)
      .then((res) => {
        this.setState({ data: res.data.data, pageInfo: res.data.pagination });
      })
      .catch((err) => {
        console.log(err.response);
      });

  handlePagination = (event) => {
    const selectedPage = event.selected + 1;
    this.setState(
      {
        page: selectedPage
      },
      () => {
        this.getDataMovie();
      }
    );
  };
  handleDetail = (data) => {
    // CARA 1 | Menampilkan Detail di Url
    // this.props.history.push(`/basic/detailMovie?movieId=${data}`);
    // Cara 2 | Kalo Detail tidak ditampilkan di url
    // this.props.history.push("/basic/detailMovie", { movieId: data });
    //
    // CARA 3 | Bisa Digunakan untuk detail product/Data
    this.props.history.push(`/basic/detailMovie/${data}`);
  };
  render() {
    const { data, pageInfo } = this.state;
    return (
      <>
        <Navbar />
        <h1>Home Page</h1>
        <hr />
        <div className="row">
          {data.map((item) => (
            <div className="col-md-4" key={item.id}>
              <Card data={item} handleDetail={this.handleDetail} />
            </div>
          ))}
        </div>
        <Pagination
          previousLabel={"Sebelumnya"}
          nextLabel={"Selanjutnya"}
          breakLabel={"..."}
          pageCount={pageInfo.totalPage}
          onPageChange={this.handlePagination}
          containerClassName={"pagination"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </>
    );
  }
}
