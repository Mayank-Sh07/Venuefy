import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Heart from "@material-ui/icons/Favorite";
import Form from "./Form/Form";
import ImageGallery from "react-image-gallery";
import "./image-gallery.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.secondary.light,
    paddingTop: "8px",
  },
  profileContainer: {
    backgroundColor: theme.palette.secondary.light,
  },
  ImageGalleryContainer: {
    order: 1,
    padding: theme.spacing(0, 1),
  },
  formContainer: {
    order: 2,
    [theme.breakpoints.only("xs")]: {
      order: 3,
    },
  },
  descriptionContainer: {
    order: 3,
    [theme.breakpoints.only("xs")]: {
      order: 2,
    },
  },
  iconEmpty: {
    color: `rgba(0,0,0,0.35)`,
  },
  iconFilled: {
    color: "black",
  },
  header: {
    color: "black",
    maxWidth: "960px",
    fontWeight: "600",
    [theme.breakpoints.only("md")]: {
      maxWidth: "730px",
    },
    [theme.breakpoints.only("sm")]: {
      maxWidth: "530px",
    },
  },
  reviewSection: {
    display: "flex",
  },
}));

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
];

export default function VenueProfile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container disableGutters>
        <Grid
          container
          className={classes.profileContainer}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={8} className={classes.ImageGalleryContainer}>
            <Container maxWidth={"md"} disableGutters>
              <ImageGallery
                items={images}
                showPlayButton={false}
                thumbnailPosition={"right"}
              />
            </Container>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.formContainer}>
            <Container maxWidth={"xs"}>
              <Form />
            </Container>
          </Grid>
          <Grid item xs={12} className={classes.descriptionContainer}>
            <Container disableGutters>
              <Grid
                container
                alignItems={"flex-start"}
                justify={"space-between"}
              >
                <Grid item xs={10} sm={11}>
                  <CardHeader
                    disableTypography
                    title={
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          noWrap
                          variant='h5'
                          className={classes.header}
                        >
                          venue name will be shown here with all props given
                          resort and spa stuff bleh shown here with all props
                          given resort and spa stuff bleh !
                        </Typography>
                        <Rating
                          readOnly
                          value={4}
                          classes={{
                            iconEmpty: classes.iconEmpty,
                            iconFilled: classes.iconFilled,
                          }}
                        />
                      </div>
                    }
                    subheader={
                      <Typography noWrap variant='subtitle2'>
                        chennai, Kolkata, Mumbai, Delhi, Allahabad, Pune,
                        Kashmir, Assam
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={2} sm={1}>
                  <IconButton>
                    <Heart style={{ color: "red", marginTop: "5px" }} />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  container
                  justify='space-evenly'
                  alignItems='center'
                ></Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

// import React from "react";
// import { useParams } from "react-router-dom";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import Checkbox from "@material-ui/core/Checkbox";
// import Hidden from "@material-ui/core/Hidden";
// import Rating from "@material-ui/lab/Rating";
// import ImageGallery from "react-image-gallery";
// import "./image-gallery.scss";
// import Favorite from "@material-ui/icons/Favorite";

// const useStyles = makeStyles((theme) => ({
//   profileContainer: {
//     padding: `25px 10px`,
//     [theme.breakpoints.only("xs")]: {
//       padding: "25px 2px",
//     },
//   },
//   venueImages: {
//     order: 1,
//     padding: 10,
//     [theme.breakpoints.only("xs")]: {
//       padding: "0px",
//     },
//   },
//   form: {
//     backgroundColor: theme.palette.primary.main,
//     order: 2,
//     margin: "15px auto",
//     padding: "15px",
//     borderRadius: "8px",
//     maxWidth: "320px",
//     [theme.breakpoints.only("sm")]: {
//       margin: "0",
//       padding: "6px",
//     },
//     [theme.breakpoints.down("xs")]: {
//       order: 3,
//     },
//   },
//   formItem: {
//     margin: theme.spacing(1, 0),
//   },
//   venueDetailsContainer: {
//     backgroundColor: "lightblue",
//     order: 3,
//     [theme.breakpoints.down("xs")]: {
//       order: 2,
//     },
//   },
//   mobilePadding: {
//     [theme.breakpoints.only("xs")]: {
//       padding: "10px 2px",
//     },
//   },
//   header: {
//     padding: "15px",
//     backgroundColor: "inherit",
//     color: "black",
//     [theme.breakpoints.only("xs")]: {
//       padding: "2px 4px",
//     },
//   },
//   headerContent: {
//     maxWidth: "245px",
//   },
//   venueName: {
//     fontWeight: 600,
//     fontSize: 24,
//     [theme.breakpoints.up("lg")]: {
//       fontSize: 30,
//     },
//     [theme.breakpoints.only("xs")]: {
//       fontSize: 16,
//       maxWidth: "340px",
//     },
//   },
//   iconEmpty: {
//     color: `rgba(0,0,0,0.5)`,
//   },
//   venueArea: {
//     color: "#424242",
//     fontSize: 18,
//     fontWeight: 400,
//     paddingLeft: "2px",
//     [theme.breakpoints.only("xs")]: {
//       fontSize: 11,
//       maxWidth: "310px",
//     },
//   },
//   about: {
//     fontSize: "1.2rem",
//     [theme.breakpoints.only("xs")]: {
//       fontSize: "0.7rem",
//     },
//     [theme.breakpoints.up("lg")]: {
//       fontSize: "1.4rem",
//     },
//   },
// }));

// const images = [
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1019/1000/600/",
//     thumbnail: "https://picsum.photos/id/1019/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1018/1000/600/",
//     thumbnail: "https://picsum.photos/id/1018/250/150/",
//   },
//   {
//     original: "https://picsum.photos/id/1015/1000/600/",
//     thumbnail: "https://picsum.photos/id/1015/250/150/",
//   },
// ];

// export default function VenueProfile() {
//   const { id } = useParams();
//   const classes = useStyles();
//   const theme = useTheme();
//   let isTablet = useMediaQuery(theme.breakpoints.down("sm"));
//   // useEffect to fetch

//   const Form = (
//     <Grid
//       item
//       container
//       xs={12}
//       sm={4}
//       md={3}
//       justify='space-evenly'
//       alignItems='center'
//       className={classes.form}
//     >
//       <form style={{ display: "contents" }}>
//         <TextField
//           name='eventDate'
//           variant='outlined'
//           required
//           fullWidth
//           id='eventDate'
//           label='Event Date'
//           InputLabelProps={{ shrink: true }}
//           type='date'
//           color='secondary'
//           size={isTablet ? "small" : "medium"}
//           className={classes.formItem}
//         />
//         <TextField
//           autoComplete='fname'
//           name='firstName'
//           variant='outlined'
//           required
//           fullWidth
//           id='firstName'
//           label='First Name'
//           color='secondary'
//           size={isTablet ? "small" : "medium"}
//           className={classes.formItem}
//         />
//         <TextField
//           variant='outlined'
//           required
//           fullWidth
//           id='email'
//           label='Email Address'
//           name='email'
//           autoComplete='email'
//           color='secondary'
//           size={isTablet ? "small" : "medium"}
//           className={classes.formItem}
//         />
//         <TextField
//           name='phoneNumber'
//           variant='outlined'
//           required
//           fullWidth
//           id='phoneNumber'
//           label='Phone Number'
//           color='secondary'
//           size={isTablet ? "small" : "medium"}
//           className={classes.formItem}
//         />
//         <Button variant='outlined' size={isTablet ? "small" : "medium"}>
//           Call Me
//         </Button>
//       </form>
//     </Grid>
//   );

//   const desktopDetailView = (
//     <>
//       <CardHeader
//         classes={{ root: classes.header }}
//         disableTypography
//         title={
//           <>
//             <Typography className={classes.venueName} noWrap>
//               ABC DEF GHI JKL MNO PQR STU VW XYZ ABC DEF GHI JKL MNO PQR STU
//             </Typography>
//           </>
//         }
//         subheader={
//           <Typography className={classes.venueArea} noWrap>
//             ABC DEF GHI JKL MNO PQR STU VW XYZ ABC DEF GHI JKL MNO PQR STU
//           </Typography>
//         }
//       />
//       {isTablet && (
//         <Grid container alignItems='center' justify='center'>
//           <Grid item xs={4}>
//             <Rating
//               value={4}
//               readOnly
//               classes={{ iconEmpty: classes.iconEmpty }}
//             />
//           </Grid>
//           <Grid item xs={2} align='center'>
//             <IconButton size='small'>
//               <Favorite style={{ color: "red" }} />
//             </IconButton>
//           </Grid>
//           <Grid item xs={6}>
//             <Button variant='contained' size='small' fullWidth color='primary'>
//               Share Video Review
//             </Button>
//           </Grid>
//         </Grid>
//       )}
//     </>
//   );

//   return (
//     <Grid container alignItems='stretch' className={classes.profileContainer}>
//       <Grid item xs={12} sm={8} md={9} className={classes.venueImages}>
//         <ImageGallery
//           items={images}
//           thumbnailPosition='right'
//           showPlayButton={false}
//           lazyLoad={true}
//         />
//       </Grid>
//       {Form}
//       <Grid item xs={12} className={classes.venueDetailsContainer}>
//         <Container className={classes.mobilePadding}>
//           <Card elevation={0} className={classes.header}>
//             {desktopDetailView}
//             <CardContent>
//               <Typography gutterBottom align='left' className={classes.about}>
//                 <b>About the venue</b>
//               </Typography>
//               <Typography gutterBottom align='left' className={classes.about}>
//                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
//                 diam nonumy eirmod tempor invidunt ut labore et dolore magna
//                 aliquyam erat, sed diam voluptua. At vero eos et accusam et
//                 justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
//                 takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
//                 dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//                 eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
//                 sed diam voluptua. At vero eos et accusam et justo duo dolores
//                 et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
//                 est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
//                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor
//                 invidunt ut labore et dolore magna aliquyam erat, sed diam
//                 voluptua. At vero eos et accusam et justo duo dolores et ea
//                 rebum. Stet clita kasd gubergren, no sea takimata sanctus est
//                 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
//                 consetetur sadipscing elitr, sed diam nonumy eirmod tempor
//                 invidunt ut labore et dolore magna aliquyam erat, sed diam
//                 voluptua. At vero eos et accusam et justo duo dolores et ea
//                 rebum. Stet clita kasd gubergren, no sea takimata sanctus est
//                 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
//                 consetetur sadipscing elitr, sed diam nonumy eirmod
//               </Typography>
//             </CardContent>
//             <Grid container justify='space-evenly'>
//               <Grid item xs={12} sm={4}>
//                 <Button fullWidth variant='contained' color='primary'>
//                   BUTTON BUTTON BUTTON
//                 </Button>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Button fullWidth variant='contained' color='primary'>
//                   BUTTON BUTTON BUTTON
//                 </Button>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Button fullWidth variant='contained' color='primary'>
//                   BUTTON BUTTON BUTTON
//                 </Button>
//               </Grid>
//             </Grid>
//           </Card>
//           <Grid
//             container
//             alignItems='center'
//             style={{ backgroundColor: "red" }}
//           >
//             <Grid item xs={12} sm={3}>
//               <img
//                 src='https://picsum.photos/id/1018/400/260/'
//                 alt='loller'
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   overflow: "hidden",
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={5}>
//               <div
//                 style={{
//                   backgroundColor: "pink",
//                   height: "70px",
//                   paddingLeft: "10px",
//                 }}
//               >
//                 <Typography variant='h5' gutterBottom>
//                   HALL NAME
//                 </Typography>
//                 <Typography variant='body1'>Features:</Typography>
//               </div>
//               <div
//                 style={{
//                   height: `calc(100vw/7.13 - 80px)`,
//                   overflow: "auto",
//                   maxHeight: "160px",
//                   minHeight: "70px",
//                 }}
//               >
//                 <Grid container>
//                   {[
//                     "abc",
//                     "xyz",
//                     "abc",
//                     "xyz",
//                     "abc",
//                     "xyz",
//                     "abc",
//                     "xyz",
//                     "abc",
//                     "xyz",
//                     "abc",
//                   ].map((ammenity) => (
//                     <Grid item xs={4} style={{ padding: "0px 10px" }}>
//                       <Typography variant='subtitle1' gutterBottom noWrap>
//                         {ammenity}
//                       </Typography>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </div>
//             </Grid>
//             <Grid item xs={10} sm={3} style={{ paddingLeft: "10px" }}>
//               <Typography variant='h6' gutterBottom>
//                 Hello
//               </Typography>
//               <Typography variant='h6' gutterBottom>
//                 Hello
//               </Typography>
//               <Typography variant='h6' gutterBottom>
//                 Hello
//               </Typography>
//             </Grid>
//             <Grid item xs={2} sm={1} align='center'>
//               <Checkbox></Checkbox>
//             </Grid>
//           </Grid>
//         </Container>
//       </Grid>
//     </Grid>
//   );
// }
