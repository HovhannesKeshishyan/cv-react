import {FC} from "react";

import DefaultSkillIcon from "@/assets/icons/skills/svg/Light.svg";
import JavaScriptIcon from "@/assets/icons/skills/svg/JavaScript.svg";
import VueIcon from "@/assets/icons/skills/svg/Vue.svg";
import ReactIcon from "@/assets/icons/skills/svg/React.svg";
import ReduxIcon from "@/assets/icons/skills/svg/Redux.svg";
import NodejsIcon from "@/assets/icons/skills/svg/NodeJS.svg";
import MongoDBIcon from "@/assets/icons/skills/svg/MongoDB.svg";
import TypeScriptIcon from "@/assets/icons/skills/svg/TypeScript.svg";
import WebpackIcon from "@/assets/icons/skills/svg/Webpack.svg";
import HTMLIcon from "@/assets/icons/skills/svg/HTML.svg";
import CSSIcon from "@/assets/icons/skills/svg/CSS.svg";
import SASSIcon from "@/assets/icons/skills/svg/SASS.svg";
import LessIcon from "@/assets/icons/skills/svg/LESS.svg";
import GitIcon from "@/assets/icons/skills/svg/GIT.svg";
import PhotoshopIcon from "@/assets/icons/skills/svg/Photoshop.svg";
import FigmaIcon from "@/assets/icons/skills/svg/Figma.svg";
import ArticulateStorylineIcon from "@/assets/icons/skills/svg/ArticulateStoryline.svg";

const ICONS_MAP = {
    defaultIcon: DefaultSkillIcon,
    javascript: JavaScriptIcon,
    vue: VueIcon,
    react: ReactIcon,
    redux: ReduxIcon,
    nodejs: NodejsIcon,
    mongodb: MongoDBIcon,
    typescript: TypeScriptIcon,
    webpack: WebpackIcon,
    html: HTMLIcon,
    css: CSSIcon,
    sass: SASSIcon,
    less: LessIcon,
    git: GitIcon,
    photoshop: PhotoshopIcon,
    figma: FigmaIcon,
    articulateStoryline: ArticulateStorylineIcon
};

export type TImgSvgIconName = keyof typeof ICONS_MAP;

interface IProps {
    iconName: TImgSvgIconName;
    alt?: string;
}

export const ImgSvgIcon: FC<IProps> = ({iconName, alt = ""}) => {
    const SVG = ICONS_MAP[iconName] || ICONS_MAP.defaultIcon;
    return <img src={SVG} alt={alt}/>;
};
