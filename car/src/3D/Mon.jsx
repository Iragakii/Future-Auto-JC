import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Mon(props) {
  const { nodes, materials } = useGLTF("/2019_ferrari_monza_sp2.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[0, 0.11, 0]} rotation={[0.005, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Base_Geo_lodA_Ferrari_MonzaRewardRecycled_2019Base_Material_0
                .geometry
            }
            material={materials.Ferrari_MonzaRewardRecycled_2019Base_Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Carbon1_Geo_lodA_Ferrari_MonzaRewardRecycled_2019Carbon1_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019Carbon1_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Grille1_Geo_lodA_Ferrari_MonzaRewardRecycled_2019Grille1A_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019Grille1A_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Grille2_Geo_lodA_Ferrari_MonzaRewardRecycled_2019Grille2A_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019Grille2A_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Grille3_Geo_lodA_Ferrari_MonzaRewardRecycled_2019Grille3A_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019Grille3A_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Grille4_Geo_lodA_Ferrari_MonzaRewardRecycled_2019Grille4A_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019Grille4A_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Grille5_Geo_lodA_Ferrari_MonzaRewardRecycled_2019Grille5A_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019Grille5A_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .InteriorTilling_Geo_lodA_Ferrari_MonzaRewardRecycled_2019InteriorTillingA_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019InteriorTillingA_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Kit1_Badge_Geo_lodA_Ferrari_MonzaRewardRecycled_2019BadgeA_Material_0
                .geometry
            }
            material={materials.Ferrari_MonzaRewardRecycled_2019BadgeA_Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Kit1_Carbon2_Geo_lodA_Ferrari_MonzaRewardRecycled_2019Carbon2_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019Carbon2_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Kit1_Coloured_Geo_lodA_Ferrari_MonzaRewardRecycled_2019SeatBelt_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019SeatBelt_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Kit1_Engine_Geo_lodA_Ferrari_MonzaRewardRecycled_2019EngineA_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019EngineA_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Kit1_Interior_Geo_lodA_Ferrari_MonzaRewardRecycled_2019InteriorA_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019InteriorA_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Kit1_Window_Geo_lodA_Ferrari_MonzaRewardRecycled_2019Window_Material_0
                .geometry
            }
            material={materials.Ferrari_MonzaRewardRecycled_2019Window_Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Kit1_Window_Geo_lodA_phong1_0.geometry}
            material={materials.phong1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .LicensePlate_Geo_lodA_Ferrari_MonzaRewardRecycled_2019LicensePlateDefaultA_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019LicensePlateDefaultA_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .Light_Geo_lodA_Ferrari_MonzaRewardRecycled_2019LightA_Material_0
                .geometry
            }
            material={materials.Ferrari_MonzaRewardRecycled_2019LightA_Material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .LightEmissive_Geo_lodA_Ferrari_MonzaRewardRecycled_2019LightEmissiveA_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019LightEmissiveA_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .ManufacturerPlate_Geo_lodA_Ferrari_MonzaRewardRecycled_2019ManufacturerPlateB_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019ManufacturerPlateB_Material
            }
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .SeatBelt_Geo_lodA_Ferrari_MonzaRewardRecycled_2019SeatBelt_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019SeatBelt_Material
            }
          />
        </group>
        <group
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .CalliperParking_Rear_L_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
            }
            position={[-0.006, 0.156, 0.072]}
            rotation={[1.22, 0.015, -0.071]}
            scale={[0.818, 0.587, 0.58]}
          />
        </group>
        <group
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes
                .CalliperParking_Rear_R_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
                .geometry
            }
            material={
              materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
            }
            position={[-0.006, 0.156, 0.072]}
            rotation={[1.22, 0.015, -0.071]}
            scale={[0.818, 0.587, 0.58]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .bodyKit1_Paint_Geo_lodABody_lodA_Ferrari_MonzaRewardRecycled_2019Paint_Material_0
              .geometry
          }
          material={materials.Ferrari_MonzaRewardRecycled_2019Paint_Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface1_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface2_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface3_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface4_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface5_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface6_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface7_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface8_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface9_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface10_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface11_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface12_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface13_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface14_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface15_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface16_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface17_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface18_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface19_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface20_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface21_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface22_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface23_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface24_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface25_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface26_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface27_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface28_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface29_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface30_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface31_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface32_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface33_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface34_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface35_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface36_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface37_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface38_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface39_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface40_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface41_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface42_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface43_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface44_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface45_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface46_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface47_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface48_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface49_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface50_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface51_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface52_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface53_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface54_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface55_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface56_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface57_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface58_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface59_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface60_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface61_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface62_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface63_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface64_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface65_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface66_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface67_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface68_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface69_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface70_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface71_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface72_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface73_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface74_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface75_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface76_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface77_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.835, 0.347, 1.347]}
          rotation={[0, 0, 0.026]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface78_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface79_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface80_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface81_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface82_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface83_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface84_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface85_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface86_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface87_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface88_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface89_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface90_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface91_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface92_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface93_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface94_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface95_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface96_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface97_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface98_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface99_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface100_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface101_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface102_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface103_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface104_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface105_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface106_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface107_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface108_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface109_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface110_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface111_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface112_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface113_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface114_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface115_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface116_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface117_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface118_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface119_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface120_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface121_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface122_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface123_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface124_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface125_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface126_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface127_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface128_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface129_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface130_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface131_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface132_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface133_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface134_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface135_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface136_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface137_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface138_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface139_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface140_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface141_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface142_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface143_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface144_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface145_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface146_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface147_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface148_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface149_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface150_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface151_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface152_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface153_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface154_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.835, 0.347, 1.347]}
          rotation={[Math.PI, 0, -3.115]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface155_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface156_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface157_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface158_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface159_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface160_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface161_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface162_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface163_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface164_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface165_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface166_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface167_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface168_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface169_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface170_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface171_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface172_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface173_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface174_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface175_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface176_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface177_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface178_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface179_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface180_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface181_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface182_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface183_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface184_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface185_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface186_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface187_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface188_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface189_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface190_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface191_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface192_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface193_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface194_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface195_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface196_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface197_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface198_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface199_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface200_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface201_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface202_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface203_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface204_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface205_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface206_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface207_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface208_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface209_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface210_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface211_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface212_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface213_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface214_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface215_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface216_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface217_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface218_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface219_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface220_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface221_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface222_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface223_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface224_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface225_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface226_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface227_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface228_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface229_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface230_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface231_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface232_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface233_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface234_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface235_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface236_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface237_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface238_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[0.812, 0.359, -1.375]}
          rotation={[0, 0, 0.017]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface239_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface240_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface241_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface242_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface243_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface244_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface245_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface246_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface247_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface248_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface249_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface250_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface251_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface252_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface253_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface254_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface255_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface256_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface257_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface258_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface259_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface260_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface261_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface262_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface263_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface264_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface265_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface266_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface267_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface268_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface269_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface270_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface271_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface272_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface273_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface274_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface275_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface276_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface277_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface278_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface279_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface280_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface281_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface282_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface283_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface284_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface285_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface286_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface287_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface288_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface289_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface290_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface291_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface292_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface293_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface294_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface295_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface296_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface297_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface298_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface299_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface300_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface301_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface302_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface303_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface304_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface305_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface306_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface307_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface308_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface309_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface310_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface311_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface312_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface313_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface314_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface315_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface316_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface317_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface318_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface319_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface320_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface321_Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019_Wheel1A_3D_3DWheel1A_Material
          }
          position={[-0.812, 0.359, -1.375]}
          rotation={[Math.PI, 0, -3.124]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface322_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface323_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface324_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface325_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface326_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface327_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface328_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface329_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface330_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface331_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface332_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface333_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface334_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface335_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface336_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface337_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface338_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface339_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface340_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface341_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface342_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface343_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface344_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.852, 0.345, 1.185]}
          rotation={[0, 0, 0.026]}
          scale={[0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface345_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface346_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface347_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface348_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface349_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface350_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface351_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface352_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface353_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface354_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface355_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface356_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface357_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface358_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface359_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface360_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface361_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface362_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface363_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface364_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface365_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface366_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface367_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.852, 0.345, 1.185]}
          rotation={[0, 0, -0.026]}
          scale={[-0.96, 0.93, 0.96]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface368_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface369_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface370_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface371_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface372_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface373_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface374_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface375_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface376_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface377_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface378_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface379_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface380_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface381_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface382_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface383_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface384_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface385_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface386_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface387_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface388_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface389_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface390_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface391_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface392_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[0.842, 0.358, -1.233]}
          rotation={[-Math.PI, 0, 3.124]}
          scale={[-1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface393_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface394_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface395_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface396_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface397_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface398_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface399_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface400_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface401_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface402_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface403_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface404_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface405_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface406_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface407_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface408_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface409_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface410_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface411_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface412_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface413_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface414_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface415_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface416_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={
            nodes
              .polySurface417_Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material_0
              .geometry
          }
          material={
            materials.Ferrari_MonzaRewardRecycled_2019CalliperGloss_Material
          }
          position={[-0.842, 0.358, -1.233]}
          rotation={[Math.PI, 0, -3.124]}
          scale={[1, 1.06, 1.044]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/2019_ferrari_monza_sp2.glb");
