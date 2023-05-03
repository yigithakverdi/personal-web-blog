import * as React from 'react'
import Layout from '../components/layout'
import { postMain, postList, postInfoFooter, postInfoBox, posteDate, postDateContainer, categoryField, categoryFieldName, tagField, tagContainer } from "/src/css/home.module.css"
import { FaFolderOpen } from "react-icons/fa"
const IndexPage = () => {
  const posts = [
    {
      title: "C++ Reverse Engineering",
      abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.",
    },
  ];

  return (
    <Layout>
      <div className={postList}>
        {posts.map((post) => (
          <div className={postMain} key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.abstract}</p>
            <div className={postInfoFooter}>
              <div className={postInfoBox}>
                <div className={tagContainer}>
                  <div className={categoryField}>
                    <FaFolderOpen size={15} /> <span className={categoryFieldName}>C++</span>
                  </div>
                  <div className={tagField}>
                    <span>Range</span>
                  </div>
                  <div className={tagField}>
                    <span>Reverse Engineering</span>
                  </div>
                </div>
              </div>
              <div className={postDateContainer}><span className={posteDate}>Posted on 30.12.2022</span></div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage