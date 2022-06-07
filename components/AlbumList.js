import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const AlbumList = (props) => {
  const [photoset, setPhotoset] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1&#39;,`
      )
      .then((response) =>
        setPhotoset(response.data.photosets.photoset),
      );
  }, [])

  const renderAlbum = ({ item }) => (
    <AlbumDetail
      navigation={props.navigation}
      key={item.id}
      title={item.title._content}
      albumId={item.id}
    />
  );

  return (
    (!photoset ?
      <Text>Loading...</Text>
      :
      <View style={{ flex: 1 }}>
        <FlatList
          data={photoset}
          renderItem={renderAlbum}
          keyExtractor={item => item.id}
        />
      </View>
    )
  );
}

export default AlbumList;