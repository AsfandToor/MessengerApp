import Head from "next/head"
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"
import AddFriend from "../components/AddFriend/AddFriend"
import CreateChat from "../components/CreateChat/CreateChat"
import Babble from "../components/Babble/Babble"

export default function Index () {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Swipe – The Simplest Chat Platform</title>
        <meta name="description" content="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href="dist/css/lib/bootstrap.min.css" type="text/css" rel="stylesheet" />
        <link href="dist/css/swipe.min.css" type="text/css" rel="stylesheet" />
        <link href="dist/img/favicon.png" type="image/png" rel="icon" />
      </Head>
      <main>
        <div className="layout">
          <Navbar />
          <Sidebar />
          <AddFriend />
          <CreateChat />
          <div className="main">
            <div className="tab-content" id="nav-tabContent">
              <Babble />
            </div>
          </div>
        </div>
      </main>


      <script src="dist/js/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
      <script src="dist/js/vendor/jquery-slim.min.js"></script>
      <script src="dist/js/vendor/popper.min.js"></script>
      <script src="dist/js/swipe.min.js"></script>
      <script src="dist/js/bootstrap.min.js"></script>
    </>
  )
}