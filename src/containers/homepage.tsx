import React from "react";
import HeaderLayout from "../components/headerLayout";
import SearchBar from "../components/searchBar";
import FeedList from "../components/feed/feedList";

const HomePage = () => {
  return (
    <div>
      <HeaderLayout>
        <div className="col-12 col-md-5 mx-auto text-center">
          <span className="d-block py-4 fs-1">Find stocks</span>
          <SearchBar />
        </div>
      </HeaderLayout>
      <div id="main-content" className={"container p-4"}>
        <section id="feeds mb-3">
          <h3 className="mb-4">Recent News</h3>
          <FeedList list={mockData} />
        </section>
      </div>
    </div>
  );
};

export default HomePage;

const mockData = [
  {
    id: "1",
    image:
      "https://i.pinimg.com/originals/6f/b1/6a/6fb16a5303844ee6ab2aebd023a72532.jpg",
    description:
      "Anthnony Levandowski get 18 months in prison for stealing Google self-driving car files",
  },
  {
    id: "45",
    image:
      "https://i.pinimg.com/originals/6f/b1/6a/6fb16a5303844ee6ab2aebd023a72532.jpg",
    description:
      "Anthnony Levandowski get 18 months in prison for stealing Google self-driving car files",
  },
  {
    id: "19",
    image:
      "https://i.pinimg.com/originals/6f/b1/6a/6fb16a5303844ee6ab2aebd023a72532.jpg",
    description:
      "Anthnony Levandowski get 18 months in prison for stealing Google self-driving car files",
  },
  {
    id: "14",
    image:
      "https://i.pinimg.com/originals/6f/b1/6a/6fb16a5303844ee6ab2aebd023a72532.jpg",
    description:
      "Anthnony Levandowski get 18 months in prison for stealing Google self-driving car files",
  },
  {
    id: "13",
    image:
      "https://i.pinimg.com/originals/6f/b1/6a/6fb16a5303844ee6ab2aebd023a72532.jpg",
    description:
      "Anthnony Levandowski get 18 months in prison for stealing Google self-driving car files",
  },
  {
    id: "12",
    image:
      "https://i.pinimg.com/originals/6f/b1/6a/6fb16a5303844ee6ab2aebd023a72532.jpg",
    description:
      "Anthnony Levandowski get 18 months in prison for stealing Google self-driving car files",
  },
  {
    id: "142",
    image:
      "https://i.pinimg.com/originals/6f/b1/6a/6fb16a5303844ee6ab2aebd023a72532.jpg",
    description:
      "Anthnony Levandowski get 18 months in prison for stealing Google self-driving car files",
  },
  {
    id: "1442",
    image:
      "https://i.pinimg.com/originals/6f/b1/6a/6fb16a5303844ee6ab2aebd023a72532.jpg",
    description:
      "Anthnony Levandowski get 18 months in prison for stealing Google self-driving car files",
  },
  {
    id: "14342",
    image:
      "https://i.pinimg.com/originals/6f/b1/6a/6fb16a5303844ee6ab2aebd023a72532.jpg",
    description:
      "Anthnony Levandowski get 18 months in prison for stealing Google self-driving car files",
  },
];
