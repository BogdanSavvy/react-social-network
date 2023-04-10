import style from "./UserProfile.module.scss";

import MainProfile from "./MainProfie/MainProfile";
import PostsTab from "./PostsTab/PostsTab";
import Activity from "./Activity/Activity";
import GalleryTab from "./GalleryTab/GalleryTab";
import VideoTab from "./VideoTab/VideoTab";
import { Route, Routes } from "react-router-dom";


const UserProfile = (props) => {
   let adminProf = props.profData.adminData.map( el => <MainProfile name={el.name} status={el.status} ava={el.ava} bgImg={el.bgImg} />);
   return (
      <div className={`${style.body}`}>
         <div className={`${style.body__page} ${style.page}`}>
            {/* <MainProfile admin={props.profData.adminData}  /> */}
            {adminProf}
            <Routes>
               <Route path="/posts" element={<PostsTab postsData={props.profData.postsData} addPost={props.addPost} />} />
               <Route path="/activity" element={<Activity />} />
               <Route path="/gallery" element={<GalleryTab />} />
               <Route path="/videos" element={<VideoTab />} />
            </Routes>
         </div>
      </div>
   )
}


export default UserProfile;