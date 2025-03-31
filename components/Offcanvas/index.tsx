import theme from '@/styles/theme';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface OffCanvasProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  widthPercentage?: number; // apenas para side
  heightPercentage?: number; // apenas para down
  position?: 'side' | 'down';
}

export const OffCanvas = ({
  visible,
  onClose,
  children,
  widthPercentage = 0.5,
  heightPercentage = 0.5,
  position = 'side',
}: OffCanvasProps) => {
  const translateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fromValue = position === 'side' ? width : height;
    const toValue = 0;
  
    if (visible) {
      translateAnim.setValue(fromValue);
      Animated.timing(translateAnim, {
        toValue,
        duration: 150,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateAnim, {
        toValue: fromValue,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, position]);
  

  return (
    <Modal transparent visible={visible} animationType="none">
      <Pressable style={styles.backdrop} onPress={onClose} />

      <Animated.View
        style={[
          styles.drawerBase,
          position === 'side'
            ? {
                width: width * widthPercentage,
                right: 0,
                top: 0,
                transform: [{ translateX: translateAnim }],
              }
            : {
                height: height * heightPercentage,
                width: '100%',
                bottom: 0,
                transform: [{ translateY: translateAnim }],
              },
        ]}
      >
        {children}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000055',
    zIndex: 1,
  },
  drawerBase: {
    position: 'absolute',
    backgroundColor: theme.colors.background,
    zIndex: 2,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});
