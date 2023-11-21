import React from 'react';
import { StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Stars({ starNum }) {
  const roundedStarNum = Math.round(starNum); // Làm tròn số sao

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= roundedStarNum ? 'yellow' : 'gray'; // Sử dụng màu vàng cho số sao đánh giá
      stars.push(
        <AntDesign key={i} name="star" size={17} color={starColor} style={styles.star} />
      );
    }
    return stars;
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
}

const styles = StyleSheet.create({
  star: {
    marginHorizontal: 2,
  },
});
