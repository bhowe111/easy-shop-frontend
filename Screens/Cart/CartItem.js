import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";

const CartItem = (props) => {
  const data = props.item.item.product;
  return (
    <ListItem
      style={styles.listItem}
      keyExtractor={(item, index) => index.toString()}
      avatar
    >
      <Left>
        <Thumbnail
          style={styles.img}
          source={{
            uri: data.image
              ? data.image
              : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png",
          }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Text>$ {data.price}</Text>
        </Right>
      </Body>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  listItem: {
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 50,
  },
  img: {
    position: "absolute",
    paddingLeft: 10,
  },
});

export default CartItem;
