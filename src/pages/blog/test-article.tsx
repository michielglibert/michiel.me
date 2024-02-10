import type { NextPage } from "next";
import Head from "next/head";
import BlogArticle from "../../components/blog/BlogArticle";
import BlogItems from "../../components/blog/BlogItems";
import AppShell from "../../components/common/AppShell";

const TestArticle: NextPage = () => {
  return (
    <AppShell>
      <BlogArticle
        date={new Date()}
        readTime={14}
        title="Fixing a Memory Leak in a Production Node.js App"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a magna et leo sagittis rutrum ac vel quam. Duis sollicitudin felis id nisl suscipit, dignissim molestie ligula lacinia. Duis sollicitudin felis id nisl suscipit, dignissim molestie ligula lacinia."
        imgSrc="/images/wegroup.png"
      />
    </AppShell>
  );
};

export default TestArticle;
