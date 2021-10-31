import * as React from 'react';
import {
  Modal as RNModal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
interface ModalProps {
  children?: React.ReactNode;
  visible?: boolean;
  onClose?: () => void;
}

export const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  visible,
  onClose,
}) => {
  return (
    <RNModal transparent visible={visible} style={styles.container}>
      <View style={styles.chContainer}>
      {children}
      </View>

      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.back} />
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    zIndex: -1,
    backgroundColor: 'rgba(0,0,0,.6)',
    width,
    height,
    position: 'absolute'
  },
});
