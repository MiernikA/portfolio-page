import {Suspense, useEffect, useState, useRef, type MouseEvent} from "react";
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Preload, useGLTF} from "@react-three/drei";
import {Group, Vector2} from "three";
import {CanvasLoader} from "../CanvasLoader.tsx";

const ROTATION_SPEED = 0.005;
const BASE_ROTATION_SPEED = 0.1;
const LIGHT_INTENSITY = 7000;
const LIGHT_POSITION: [number, number, number] = [45, 120, 120];
const LIGHT_ANGLE = 0.6;
const LIGHT_PENUMBRA = 0.5;
const MODEL_SCALE = {mobile: 0.5, desktop: 1};
const MODEL_POSITION: [number, number, number] = [30, 10, -15];
const MODEL_ROTATION: [number, number, number] = [0, 1.5, 0.3];
const HEMISPHERE_INTENSITY = 0.1;
const CAMERA_POSITION: [number, number, number] = [80, 80, 80];
const CAMERA_LOOK_AT: [number, number, number] = [0, 15, 0];

type Props = {
    isMobile: boolean;
    rotationDelta: Vector2;
};

const Globe = ({isMobile, rotationDelta}: Props) => {
    const model = useGLTF("./models/planet/scene_final.glb");
    const modelRef = useRef<Group>(null);

    useFrame((_, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta * BASE_ROTATION_SPEED;
            modelRef.current.rotation.y += rotationDelta.x * ROTATION_SPEED;
            modelRef.current.rotation.x += rotationDelta.y * ROTATION_SPEED;
        }
    });

    return (
        <group>
            <hemisphereLight intensity={HEMISPHERE_INTENSITY}/>
            <spotLight
                intensity={LIGHT_INTENSITY}
                position={LIGHT_POSITION}
                angle={LIGHT_ANGLE}
                penumbra={LIGHT_PENUMBRA}
                castShadow
            />
            <primitive
                ref={modelRef}
                object={model.scene as Group}
                scale={isMobile ? MODEL_SCALE.mobile : MODEL_SCALE.desktop}
                position={MODEL_POSITION}
                rotation={MODEL_ROTATION}
            />
        </group>
    );
};

const CameraSetup = () => {
    const {camera} = useThree();

    useEffect(() => {
        camera.position.set(...CAMERA_POSITION);
        camera.lookAt(...CAMERA_LOOK_AT);
    }, [camera]);
    return null;
};

export const GlobeCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [rotationDelta, setRotationDelta] = useState(new Vector2(0, 0));
    const lastPos = useRef(new Vector2(0, 0));

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event: MediaQueryListEvent) =>
            setIsMobile(event.matches);
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () =>
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    const handleMouseDown = (e: MouseEvent) => {
        if (e.button === 0) {
            setIsDragging(true);
            lastPos.current.set(e.clientX, e.clientY);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setRotationDelta(new Vector2(0, 0));
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const dx = e.clientX - lastPos.current.x;
        const dy = e.clientY - lastPos.current.y;
        lastPos.current.set(e.clientX, e.clientY);
        setRotationDelta(new Vector2(dx, dy));
    };

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                cursor: isDragging ? "grabbing" : isHovering ? "grab" : "default",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setIsDragging(false);
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onWheel={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
        >
            <Canvas
                gl={{
                    antialias: false,
                    powerPreference: "high-performance",
                    precision: "mediump"
                }}
                dpr={2}
            >
                <Suspense fallback={<CanvasLoader/>}>
                    <CameraSetup/>
                    <Globe isMobile={isMobile} rotationDelta={rotationDelta}/>
                </Suspense>
                <Preload all/>
            </Canvas>
        </div>
    );
};
