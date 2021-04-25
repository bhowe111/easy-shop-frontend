// import React, { useState, useEffect } from "react";
// import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
// import Swiper from "react-native-swiper/src";

// var { width } = Dimensions.get("window");

// const Banner = () => {
//   const [bannerData, setBannerData] = useState([]);

//   useEffect(() => {
//     setBannerData([
//       "https://cdn.pixabay.com/photo/2017/01/23/17/49/xbox-2003277__340.jpg",
//       "https://cdn.pixabay.com/photo/2017/04/10/20/10/ray-bans-2219647__340.jpg",
//       "https://cdn.pixabay.com/photo/2020/05/26/07/06/screwdriver-5221752__340.jpg",
//       "https://cdn.pixabay.com/photo/2018/11/30/02/11/winter-boots-3846915__340.jpg",
//     ]);

//     return () => {
//       setBannerData([]);
//     };
//   }, []);

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.swiper}>
//           <Swiper
//             style={{ height: width / 2 }}
//             showButtons={false}
//             autoplay={true}
//             autoplayTimeout={4}
//           >
//             {bannerData.map((item) => {
//               return (
//                 <Image
//                   key={item}
//                   style={styles.imageBanner}
//                   resizeMode="contain"
//                   source={{ uri: item }}
//                 />
//               );
//             })}
//           </Swiper>
//           <View style={{ height: 20 }}></View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "gainsboro",
//   },
//   swiper: {
//     width: width,
//     alignItems: "center",
//     marginTop: 10,
//   },
//   imageBanner: {
//     height: width / 2,
//     width: width - 40,
//     borderRadius: 10,
//     marginHorizontal: 20,
//   },
// });

// export default Banner;
