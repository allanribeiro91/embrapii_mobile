import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  color?: string;
  size?: number;
}

export const IconProjetos = ({ color = 'white', size = 24 }: IconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M80-140v-320h320v320H80Zm80-80h160v-160H160v160Zm60-340 220-360 220 360H220Zm142-80h156l-78-126-78 126ZM863-42 757-148q-21 14-45.5 21t-51.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T813-204L919-98l-56 56ZM660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-380Zm120-260Z" />
    </Svg>
  );
};

export const IconUnidades = ({ color = 'white', size = 24 }: IconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M200-120v-80h200v-80q-83 0-141.5-58.5T200-480q0-61 33.5-111t90.5-73q8-34 35.5-55t62.5-21l-22-62 38-14-14-36 76-28 12 38 38-14 110 300-38 14 14 38-76 28-12-38-38 14-24-66q-15 14-34.5 21t-39.5 5q-22-2-41-13.5T338-582q-27 16-42.5 43T280-480q0 50 35 85t85 35h320v80H520v80h240v80H200Zm346-458 36-14-68-188-38 14 70 188Zm-126-22q17 0 28.5-11.5T460-640q0-17-11.5-28.5T420-680q-17 0-28.5 11.5T380-640q0 17 11.5 28.5T420-600Zm126 22Zm-126-62Zm0 0Z" />
    </Svg>
  );
};

export const IconEmpresas = ({ color = 'white', size = 24 }: IconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M159-120v-120h124L181-574q-27-15-44.5-44T119-680q0-50 35-85t85-35q39 0 69.5 22.5T351-720h128v-40q0-17 11.5-28.5T519-800q9 0 17.5 4t14.5 12l68-64q9-9 21.5-11.5T665-856l156 72q12 6 16.5 17.5T837-744q-6 12-17.5 15.5T797-730l-144-66-94 88v56l94 86 144-66q11-5 23-1t17 15q6 12 1 23t-17 17l-156 74q-12 6-24.5 3.5T619-512l-68-64q-6 6-14.5 11t-17.5 5q-17 0-28.5-11.5T479-600v-40H351q-3 8-6.5 15t-9.5 15l200 370h144v120H159Zm80-520q17 0 28.5-11.5T279-680q0-17-11.5-28.5T239-720q-17 0-28.5 11.5T199-680q0 17 11.5 28.5T239-640Zm126 400h78L271-560h-4l98 320Zm78 0Z" />
    </Svg>
  );
};

export const IconNumeros = ({ color = 'white', size = 24 }: IconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" />
    </Svg>
  );
};

export const IconArrowLeft = ({ color = 'white', size = 24 }: IconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
    </Svg>
  );
};

export const IconKeyboardArrowDown = ({
  color = 'white',
  size = 24,
}: IconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </Svg>
  );
};

export const IconKeyboardArrowUp = ({
  color = 'white',
  size = 24,
}: IconProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
    </Svg>
  );
};
