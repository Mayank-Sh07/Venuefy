import React, { useState } from "react";
import clsx from "clsx";
import FilterDrawer from "./FilterDrawer/FilterDrawer";
import { Container, makeStyles, Drawer } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  filterOpen: {
    [theme.breakpoints.up("lg")]: {
      transition: theme.transitions.create("padding", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      paddingLeft: "250px",
    },
  },
  venueContainer: {
    [theme.breakpoints.up("lg")]: {
      transition: theme.transitions.create("padding", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  abs: {
    position: "absolute",
  },
}));

export default function Venues() {
  const classes = useStyles();
  const [isFliterOpen, setFilterOpen] = useState(false);
  console.log(isFliterOpen);
  return (
    <Container
      disableGutters
      maxWidth={false}
      id='drawer-container'
      style={{ backgroundColor: "black" }}
    >
      <FilterDrawer open={isFliterOpen} setOpen={setFilterOpen} />
      <Container
        style={{ color: "black", backgroundColor: "white" }}
        maxWidth={false}
        className={clsx(classes.venueContainer, {
          [classes.filterOpen]: isFliterOpen,
        })}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Non consectetur a
        erat nam at. Volutpat commodo sed egestas egestas fringilla phasellus
        faucibus scelerisque. Id cursus metus aliquam eleifend. Ornare quam
        viverra orci sagittis eu volutpat odio facilisis mauris. Hac habitasse
        platea dictumst quisque sagittis purus. Et ultrices neque ornare aenean
        euismod. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum.
        Blandit massa enim nec dui nunc mattis. Nulla pharetra diam sit amet
        nisl suscipit adipiscing. Faucibus et molestie ac feugiat sed lectus
        vestibulum mattis. Et malesuada fames ac turpis egestas. At urna
        condimentum mattis pellentesque id nibh. Enim nec dui nunc mattis enim.
        Elementum nisi quis eleifend quam adipiscing. Malesuada fames ac turpis
        egestas sed tempus urna et. Urna duis convallis convallis tellus. Sit
        amet tellus cras adipiscing enim eu. Amet nulla facilisi morbi tempus
        iaculis urna id. Risus ultricies tristique nulla aliquet enim tortor at.
        Scelerisque purus semper eget duis at. Augue lacus viverra vitae congue.
        Adipiscing at in tellus integer feugiat scelerisque varius morbi enim.
        Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique.
        Nisi scelerisque eu ultrices vitae auctor eu. Ullamcorper malesuada
        proin libero nunc consequat interdum varius sit amet. Fringilla urna
        porttitor rhoncus dolor purus non enim praesent. Aliquam ultrices
        sagittis orci a scelerisque purus semper eget duis. Cras sed felis eget
        velit aliquet sagittis. Duis convallis convallis tellus id interdum
        velit laoreet id donec. Massa massa ultricies mi quis hendrerit dolor.
        Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum
        integer. Molestie nunc non blandit massa enim nec dui nunc mattis. A
        iaculis at erat pellentesque adipiscing commodo elit at. Dui vivamus
        arcu felis bibendum ut tristique et egestas. Semper feugiat nibh sed
        pulvinar. Dui vivamus arcu felis bibendum ut tristique et egestas quis.
        Suspendisse ultrices gravida dictum fusce ut placerat orci. Ornare
        aenean euismod elementum nisi. Nulla posuere sollicitudin aliquam
        ultrices sagittis. Dictum sit amet justo donec enim diam. Risus nullam
        eget felis eget nunc. At risus viverra adipiscing at in tellus integer.
        Semper viverra nam libero justo laoreet. Eu lobortis elementum nibh
        tellus. Ac tincidunt vitae semper quis lectus. Duis ut diam quam nulla.
        In iaculis nunc sed augue lacus viverra. Ut placerat orci nulla
        pellentesque dignissim enim sit amet venenatis. Non consectetur a erat
        nam at lectus urna duis convallis. Tincidunt tortor aliquam nulla
        facilisi cras fermentum odio eu feugiat. Ut lectus arcu bibendum at
        varius vel. At in tellus integer feugiat scelerisque. Sed euismod nisi
        porta lorem mollis aliquam ut porttitor leo. Aliquam sem fringilla ut
        morbi tincidunt augue interdum. Nisi vitae suscipit tellus mauris a
        diam. Non curabitur gravida arcu ac tortor dignissim. Cras tincidunt
        lobortis feugiat vivamus at augue. Purus faucibus ornare suspendisse
        sed. Tristique senectus et netus et malesuada fames ac turpis. Habitasse
        platea dictumst quisque sagittis purus sit amet volutpat. Vel turpis
        nunc eget lorem dolor. Pharetra sit amet aliquam id diam maecenas.
        Mauris pharetra et ultrices neque. Quis lectus nulla at volutpat diam ut
        venenatis. Nulla facilisi morbi tempus iaculis urna id volutpat lacus
        laoreet. Aliquet bibendum enim facilisis gravida neque convallis a. Dis
        parturient montes nascetur ridiculus mus mauris vitae. Volutpat odio
        facilisis mauris sit amet massa vitae. Scelerisque eu ultrices vitae
        auctor eu augue ut lectus. Nunc mi ipsum faucibus vitae aliquet nec
        ullamcorper sit. Condimentum id venenatis a condimentum vitae sapien
        pellentesque. Eget mi proin sed libero enim sed faucibus turpis in.
        Porttitor leo a diam sollicitudin tempor id eu. Sed vulputate mi sit
        amet mauris commodo. Diam sollicitudin tempor id eu nisl nunc mi ipsum
        faucibus. Nunc vel risus commodo viverra maecenas accumsan lacus vel
        facilisis. Dictum non consectetur a erat nam. Aliquet sagittis id
        consectetur purus ut. At imperdiet dui accumsan sit amet nulla facilisi
        morbi. Facilisi morbi tempus iaculis urna id. Tellus cras adipiscing
        enim eu turpis. Diam vel quam elementum pulvinar. Condimentum lacinia
        quis vel eros donec ac odio tempor. Mattis ullamcorper velit sed
        ullamcorper morbi tincidunt ornare. Mi ipsum faucibus vitae aliquet nec
        ullamcorper sit amet risus. Lacus luctus accumsan tortor posuere ac ut.
        Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Mattis
        vulputate enim nulla aliquet porttitor. Tortor dignissim convallis
        aenean et tortor at risus. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Non consectetur a erat nam at. Volutpat commodo sed
        egestas egestas fringilla phasellus faucibus scelerisque. Id cursus
        metus aliquam eleifend. Ornare quam viverra orci sagittis eu volutpat
        odio facilisis mauris. Hac habitasse platea dictumst quisque sagittis
        purus. Et ultrices neque ornare aenean euismod. Facilisi cras fermentum
        odio eu feugiat pretium nibh ipsum. Blandit massa enim nec dui nunc
        mattis. Nulla pharetra diam sit amet nisl suscipit adipiscing. Faucibus
        et molestie ac feugiat sed lectus vestibulum mattis. Et malesuada fames
        ac turpis egestas. At urna condimentum mattis pellentesque id nibh. Enim
        nec dui nunc mattis enim. Elementum nisi quis eleifend quam adipiscing.
        Malesuada fames ac turpis egestas sed tempus urna et. Urna duis
        convallis convallis tellus. Sit amet tellus cras adipiscing enim eu.
        Amet nulla facilisi morbi tempus iaculis urna id. Risus ultricies
        tristique nulla aliquet enim tortor at. Scelerisque purus semper eget
        duis at. Augue lacus viverra vitae congue. Adipiscing at in tellus
        integer feugiat scelerisque varius morbi enim. Lorem ipsum dolor sit
        amet consectetur adipiscing elit duis tristique. Nisi scelerisque eu
        ultrices vitae auctor eu. Ullamcorper malesuada proin libero nunc
        consequat interdum varius sit amet. Fringilla urna porttitor rhoncus
        dolor purus non enim praesent. Aliquam ultrices sagittis orci a
        scelerisque purus semper eget duis. Cras sed felis eget velit aliquet
        sagittis. Duis convallis convallis tellus id interdum velit laoreet id
        donec. Massa massa ultricies mi quis hendrerit dolor. Aliquet sagittis
        id consectetur purus ut faucibus pulvinar elementum integer. Molestie
        nunc non blandit massa enim nec dui nunc mattis. A iaculis at erat
        pellentesque adipiscing commodo elit at. Dui vivamus arcu felis bibendum
        ut tristique et egestas. Semper feugiat nibh sed pulvinar. Dui vivamus
        arcu felis bibendum ut tristique et egestas quis. Suspendisse ultrices
        gravida dictum fusce ut placerat orci. Ornare aenean euismod elementum
        nisi. Nulla posuere sollicitudin aliquam ultrices sagittis. Dictum sit
        amet justo donec enim diam. Risus nullam eget felis eget nunc. At risus
        viverra adipiscing at in tellus integer. Semper viverra nam libero justo
        laoreet. Eu lobortis elementum nibh tellus. Ac tincidunt vitae semper
        quis lectus. Duis ut diam quam nulla. In iaculis nunc sed augue lacus
        viverra. Ut placerat orci nulla pellentesque dignissim enim sit amet
        venenatis. Non consectetur a erat nam at lectus urna duis convallis.
        Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat.
        Ut lectus arcu bibendum at varius vel. At in tellus integer feugiat
        scelerisque. Sed euismod nisi porta lorem mollis aliquam ut porttitor
        leo. Aliquam sem fringilla ut morbi tincidunt augue interdum. Nisi vitae
        suscipit tellus mauris a diam. Non curabitur gravida arcu ac tortor
        dignissim. Cras tincidunt lobortis feugiat vivamus at augue. Purus
        faucibus ornare suspendisse sed. Tristique senectus et netus et
        malesuada fames ac turpis. Habitasse platea dictumst quisque sagittis
        purus sit amet volutpat. Vel turpis nunc eget lorem dolor. Pharetra sit
        amet aliquam id diam maecenas. Mauris pharetra et ultrices neque. Quis
        lectus nulla at volutpat diam ut venenatis. Nulla facilisi morbi tempus
        iaculis urna id volutpat lacus laoreet. Aliquet bibendum enim facilisis
        gravida neque convallis a. Dis parturient montes nascetur ridiculus mus
        mauris vitae. Volutpat odio facilisis mauris sit amet massa vitae.
        Scelerisque eu ultrices vitae auctor eu augue ut lectus. Nunc mi ipsum
        faucibus vitae aliquet nec ullamcorper sit. Condimentum id venenatis a
        condimentum vitae sapien pellentesque. Eget mi proin sed libero enim sed
        faucibus turpis in. Porttitor leo a diam sollicitudin tempor id eu. Sed
        vulputate mi sit amet mauris commodo. Diam sollicitudin tempor id eu
        nisl nunc mi ipsum faucibus. Nunc vel risus commodo viverra maecenas
        accumsan lacus vel facilisis. Dictum non consectetur a erat nam. Aliquet
        sagittis id consectetur purus ut. At imperdiet dui accumsan sit amet
        nulla facilisi morbi. Facilisi morbi tempus iaculis urna id. Tellus cras
        adipiscing enim eu turpis. Diam vel quam elementum pulvinar. Condimentum
        lacinia quis vel eros donec ac odio tempor. Mattis ullamcorper velit sed
        ullamcorper morbi tincidunt ornare. Mi ipsum faucibus vitae aliquet nec
        ullamcorper sit amet risus. Lacus luctus accumsan tortor posuere ac ut.
        Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Mattis
        vulputate enim nulla aliquet porttitor. Tortor dignissim convallis
        aenean et tortor at risus.
      </Container>
    </Container>
  );
}
