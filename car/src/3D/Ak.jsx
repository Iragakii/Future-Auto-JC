import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Ak(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/2022__aston_martin_valkyrie_spider.glb')
  const { actions , names} = useAnimations(animations, group)
  const [animationPlaying, setAnimationPlaying] = useState(false);
  useEffect(() => { 
      if (actions && names.length > 0 && !animationPlaying) {
        actions[names[0]].play();
        setAnimationPlaying(true);
      }
  }, [actions, names ,animationPlaying]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={80}>
          <group
            name="d1f1bbd7a52d4483a55833bf7eed9ca7fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.001}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="CSB" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="CSB__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.CSB__0.geometry}
                    material={materials['.CSB__0']}
                  />
                </group>
                <group name="Body" position={[0, 0.57, 0]} rotation={[0.014, 0, 0]} scale={10}>
                  <group
                    name="DoorLF"
                    position={[0.577, 0.56, 0.81]}
                    rotation={[-0.046, -0.097, -0.411]}>
                    <group
                      name="DoorLF_Piston1"
                      position={[-0.014, -0.016, -0.101]}
                      rotation={[0.147, -0.406, 0.41]}>
                      <group name="DoorLF_Piston1_Coloured">
                        <group
                          name="Object_10"
                          position={[-0.848, -0.521, -0.366]}
                          rotation={[0.074, 0.528, 0]}>
                          <mesh
                            name="DoorLF_Piston1_Coloured_CSR2_Global_Texture_Coloured_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.DoorLF_Piston1_Coloured_CSR2_Global_Texture_Coloured_0.geometry
                            }
                            material={materials.CSR2_Global_Texture_Coloured}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="DoorLF_Textured">
                      <group
                        name="Object_13"
                        position={[-0.392, -0.74, -0.775]}
                        rotation={[0.004, 0.107, 0.408]}>
                        <mesh
                          name="DoorLF_Textured_CSR2_Textured_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_Textured_CSR2_Textured_0.geometry}
                          material={materials.CSR2_Textured}
                        />
                      </group>
                    </group>
                    <group name="DoorLF_Glass">
                      <group
                        name="Object_16"
                        position={[-0.392, -0.74, -0.775]}
                        rotation={[0.004, 0.107, 0.408]}>
                        <mesh
                          name="DoorLF_Glass_CSR2_Window_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_Glass_CSR2_Window_0.geometry}
                          material={materials.CSR2_Window}
                        />
                      </group>
                    </group>
                    <group name="DoorLF_GlassInside">
                      <group
                        name="Object_19"
                        position={[-0.392, -0.74, -0.775]}
                        rotation={[0.004, 0.107, 0.408]}>
                        <mesh
                          name="DoorLF_GlassInside_CSR2_Window_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_GlassInside_CSR2_Window_0.geometry}
                          material={materials.CSR2_Window}
                        />
                      </group>
                    </group>
                    <group name="DoorLF_Base">
                      <group
                        name="Object_22"
                        position={[-0.392, -0.74, -0.775]}
                        rotation={[0.004, 0.107, 0.408]}>
                        <mesh
                          name="DoorLF_Base_CSR2_Base_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_Base_CSR2_Base_0.geometry}
                          material={materials.CSR2_Base}
                        />
                      </group>
                    </group>
                    <group name="DoorLF_Badge">
                      <group
                        name="Object_25"
                        position={[-0.392, -0.74, -0.775]}
                        rotation={[0.004, 0.107, 0.408]}>
                        <mesh
                          name="DoorLF_Badge_CSR2_Badge_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_Badge_CSR2_Badge_0.geometry}
                          material={materials.CSR2_Badge}
                        />
                      </group>
                    </group>
                    <group name="DoorLF_Paint">
                      <group
                        name="Object_28"
                        position={[-0.392, -0.74, -0.775]}
                        rotation={[0.004, 0.107, 0.408]}>
                        <mesh
                          name="DoorLF_Paint_CSR2_CarPaint_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_Paint_CSR2_CarPaint_0.geometry}
                          material={materials.CSR2_CarPaint}
                        />
                      </group>
                    </group>
                    <group name="DoorLF_Coloured">
                      <group
                        name="Object_31"
                        position={[-0.392, -0.74, -0.775]}
                        rotation={[0.004, 0.107, 0.408]}>
                        <mesh
                          name="DoorLF_Coloured_CSR2_Global_Texture_Coloured_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_Coloured_CSR2_Global_Texture_Coloured_0.geometry}
                          material={materials.CSR2_Global_Texture_Coloured}
                        />
                      </group>
                    </group>
                    <group name="DoorLF_Interior">
                      <group
                        name="Object_34"
                        position={[-0.392, -0.74, -0.775]}
                        rotation={[0.004, 0.107, 0.408]}>
                        <mesh
                          name="DoorLF_Interior_CSR2_Interior_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_Interior_CSR2_Interior_0.geometry}
                          material={materials.CSR2_Interior}
                        />
                        <mesh
                          name="DoorLF_Interior_CSR2_InteriorA_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_Interior_CSR2_InteriorA_0.geometry}
                          material={materials.CSR2_InteriorA}
                        />
                      </group>
                    </group>
                    <group name="DoorLF_InteriorZone1">
                      <group
                        name="Object_38"
                        position={[-0.392, -0.74, -0.775]}
                        rotation={[0.004, 0.107, 0.408]}>
                        <mesh
                          name="DoorLF_InteriorZone1_CSR2_InteriorZone1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_InteriorZone1_CSR2_InteriorZone1_0.geometry}
                          material={materials.CSR2_InteriorZone1}
                        />
                      </group>
                    </group>
                    <group name="DoorLF_InteriorZone2">
                      <group
                        name="Object_41"
                        position={[-0.392, -0.74, -0.775]}
                        rotation={[0.004, 0.107, 0.408]}>
                        <mesh
                          name="DoorLF_InteriorZone2_CSR2_InteriorZone2A_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorLF_InteriorZone2_CSR2_InteriorZone2A_0.geometry}
                          material={materials.CSR2_InteriorZone2A}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="DoorLF_Rod1"
                    position={[0.646, 0.535, 0.575]}
                    rotation={[-0.085, -0.526, -0.043]}>
                    <group name="DoorLF_Rod1_Coloured">
                      <group
                        name="Object_45"
                        position={[-0.848, -0.521, -0.21]}
                        rotation={[0.074, 0.528, 0]}>
                        <mesh
                          name="DoorLF_Rod1_Coloured_CSR2_Global_Texture_Coloured_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.DoorLF_Rod1_Coloured_CSR2_Global_Texture_Coloured_0.geometry
                          }
                          material={materials.CSR2_Global_Texture_Coloured}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="DoorRF"
                    position={[-0.577, 0.56, 0.81]}
                    rotation={[3.095, -0.097, 2.731]}>
                    <group
                      name="DoorRF_Piston1"
                      position={[-0.014, -0.016, 0.101]}
                      rotation={[2.994, -0.406, 2.731]}>
                      <group name="DoorRF_Piston1_Coloured">
                        <group
                          name="Object_50"
                          position={[0.848, -0.52, -0.366]}
                          rotation={[0.074, -0.528, 0]}>
                          <mesh
                            name="DoorRF_Piston1_Coloured_CSR2_Global_Texture_Coloured_0"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes.DoorRF_Piston1_Coloured_CSR2_Global_Texture_Coloured_0.geometry
                            }
                            material={materials.CSR2_Global_Texture_Coloured}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="DoorRF_Textured">
                      <group
                        name="Object_53"
                        position={[-0.392, -0.74, 0.775]}
                        rotation={[3.137, 0.107, 2.733]}>
                        <mesh
                          name="DoorRF_Textured_CSR2_Textured_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_Textured_CSR2_Textured_0.geometry}
                          material={materials.CSR2_Textured}
                        />
                      </group>
                    </group>
                    <group name="DoorRF_Glass">
                      <group
                        name="Object_56"
                        position={[-0.392, -0.74, 0.775]}
                        rotation={[3.137, 0.107, 2.733]}>
                        <mesh
                          name="DoorRF_Glass_CSR2_Window_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_Glass_CSR2_Window_0.geometry}
                          material={materials.CSR2_Window}
                        />
                      </group>
                    </group>
                    <group name="DoorRF_GlassInside">
                      <group
                        name="Object_59"
                        position={[-0.392, -0.74, 0.775]}
                        rotation={[3.137, 0.107, 2.733]}>
                        <mesh
                          name="DoorRF_GlassInside_CSR2_Window_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_GlassInside_CSR2_Window_0.geometry}
                          material={materials.CSR2_Window}
                        />
                      </group>
                    </group>
                    <group name="DoorRF_Base">
                      <group
                        name="Object_62"
                        position={[-0.392, -0.74, 0.775]}
                        rotation={[3.137, 0.107, 2.733]}>
                        <mesh
                          name="DoorRF_Base_CSR2_Base_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_Base_CSR2_Base_0.geometry}
                          material={materials.CSR2_Base}
                        />
                      </group>
                    </group>
                    <group name="DoorRF_Badge">
                      <group
                        name="Object_65"
                        position={[-0.392, -0.74, 0.775]}
                        rotation={[3.137, 0.107, 2.733]}>
                        <mesh
                          name="DoorRF_Badge_CSR2_Badge_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_Badge_CSR2_Badge_0.geometry}
                          material={materials.CSR2_Badge}
                        />
                      </group>
                    </group>
                    <group name="DoorRF_Paint">
                      <group
                        name="Object_68"
                        position={[-0.392, -0.74, 0.775]}
                        rotation={[3.137, 0.107, 2.733]}>
                        <mesh
                          name="DoorRF_Paint_CSR2_CarPaint_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_Paint_CSR2_CarPaint_0.geometry}
                          material={materials.CSR2_CarPaint}
                        />
                      </group>
                    </group>
                    <group name="DoorRF_Coloured">
                      <group
                        name="Object_71"
                        position={[-0.392, -0.74, 0.775]}
                        rotation={[3.137, 0.107, 2.733]}>
                        <mesh
                          name="DoorRF_Coloured_CSR2_Global_Texture_Coloured_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_Coloured_CSR2_Global_Texture_Coloured_0.geometry}
                          material={materials.CSR2_Global_Texture_Coloured}
                        />
                      </group>
                    </group>
                    <group name="DoorRF_Interior">
                      <group
                        name="Object_74"
                        position={[-0.392, -0.74, 0.775]}
                        rotation={[3.137, 0.107, 2.733]}>
                        <mesh
                          name="DoorRF_Interior_CSR2_Interior_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_Interior_CSR2_Interior_0.geometry}
                          material={materials.CSR2_Interior}
                        />
                        <mesh
                          name="DoorRF_Interior_CSR2_InteriorA_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_Interior_CSR2_InteriorA_0.geometry}
                          material={materials.CSR2_InteriorA}
                        />
                      </group>
                    </group>
                    <group name="DoorRF_InteriorZone1">
                      <group
                        name="Object_78"
                        position={[-0.392, -0.74, 0.775]}
                        rotation={[3.137, 0.107, 2.733]}>
                        <mesh
                          name="DoorRF_InteriorZone1_CSR2_InteriorZone1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_InteriorZone1_CSR2_InteriorZone1_0.geometry}
                          material={materials.CSR2_InteriorZone1}
                        />
                      </group>
                    </group>
                    <group name="DoorRF_InteriorZone2">
                      <group
                        name="Object_81"
                        position={[-0.392, -0.74, 0.775]}
                        rotation={[3.137, 0.107, 2.733]}>
                        <mesh
                          name="DoorRF_InteriorZone2_CSR2_InteriorZone2A_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.DoorRF_InteriorZone2_CSR2_InteriorZone2A_0.geometry}
                          material={materials.CSR2_InteriorZone2A}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="DoorRF_Rod1"
                    position={[-0.646, 0.535, 0.575]}
                    rotation={[-0.085, 0.526, 0.043]}>
                    <group name="DoorRF_Rod1_Coloured">
                      <group
                        name="Object_85"
                        position={[0.848, -0.521, -0.21]}
                        rotation={[0.074, -0.528, 0]}>
                        <mesh
                          name="DoorRF_Rod1_Coloured_CSR2_Global_Texture_Coloured_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.DoorRF_Rod1_Coloured_CSR2_Global_Texture_Coloured_0.geometry
                          }
                          material={materials.CSR2_Global_Texture_Coloured}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Hood" position={[0, 0.942, -0.348]} rotation={[0.001, 0, 0]}>
                    <group name="Hood_Glass">
                      <group
                        name="Object_89"
                        position={[0, -0.942, 0.349]}
                        rotation={[-0.001, 0, 0]}>
                        <mesh
                          name="Hood_Glass_CSR2_GlassClear_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Hood_Glass_CSR2_GlassClear_0.geometry}
                          material={materials.CSR2_GlassClear}
                        />
                      </group>
                    </group>
                    <group name="Hood_GlassInside">
                      <group
                        name="Object_92"
                        position={[0, -0.942, 0.349]}
                        rotation={[-0.001, 0, 0]}>
                        <mesh
                          name="Hood_GlassInside_CSR2_WindowDark_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Hood_GlassInside_CSR2_WindowDark_0.geometry}
                          material={materials.CSR2_WindowDark}
                        />
                      </group>
                    </group>
                    <group name="Hood_Base">
                      <group
                        name="Object_95"
                        position={[0, -0.942, 0.349]}
                        rotation={[-0.001, 0, 0]}>
                        <mesh
                          name="Hood_Base_CSR2_Base_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Hood_Base_CSR2_Base_0.geometry}
                          material={materials.CSR2_Base}
                        />
                      </group>
                    </group>
                    <group name="Hood_Carbon1">
                      <group
                        name="Object_98"
                        position={[0, -0.942, 0.349]}
                        rotation={[-0.001, 0, 0]}>
                        <mesh
                          name="Hood_Carbon1_CSR2_Global_Texture_Carbon1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Hood_Carbon1_CSR2_Global_Texture_Carbon1_0.geometry}
                          material={materials.CSR2_Global_Texture_Carbon1}
                        />
                      </group>
                    </group>
                    <group name="Hood_Light">
                      <group
                        name="Object_101"
                        position={[0, -0.942, 0.349]}
                        rotation={[-0.001, 0, 0]}>
                        <mesh
                          name="Hood_Light_CSR2_Light_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Hood_Light_CSR2_Light_0.geometry}
                          material={materials.CSR2_Light}
                        />
                      </group>
                    </group>
                    <group name="Hood_Engine">
                      <group
                        name="Object_104"
                        position={[0, -0.942, 0.349]}
                        rotation={[-0.001, 0, 0]}>
                        <mesh
                          name="Hood_Engine_CSR2_Engine_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Hood_Engine_CSR2_Engine_0.geometry}
                          material={materials.CSR2_Engine}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="Hood_Hinge1"
                    position={[0.285, 0.724, -1.085]}
                    rotation={[-0.205, 0.048, 0.01]}>
                    <group name="Hood_Hinge1_Carbon1">
                      <group
                        name="Object_108"
                        position={[-0.338, -0.926, 0.9]}
                        rotation={[0.205, -0.049, 0]}>
                        <mesh
                          name="Hood_Hinge1_Carbon1_CSR2_Global_Texture_Carbon1_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes.Hood_Hinge1_Carbon1_CSR2_Global_Texture_Carbon1_0.geometry
                          }
                          material={materials.CSR2_Global_Texture_Carbon1}
                        />
                      </group>
                    </group>
                    <group name="Hood_Hinge1_Engine">
                      <group
                        name="Object_111"
                        position={[-0.338, -0.926, 0.9]}
                        rotation={[0.205, -0.049, 0]}>
                        <mesh
                          name="Hood_Hinge1_Engine_CSR2_Engine_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Hood_Hinge1_Engine_CSR2_Engine_0.geometry}
                          material={materials.CSR2_Engine}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Roof" position={[0, 0.827, -0.238]} scale={0.001}>
                    <group name="Roof_Glass">
                      <group name="Object_115" position={[0, -827.199, 238.411]} scale={1000}>
                        <mesh
                          name="Roof_Glass_CSR2_Window_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Roof_Glass_CSR2_Window_0.geometry}
                          material={materials.CSR2_Window}
                        />
                      </group>
                    </group>
                    <group name="Roof_Base">
                      <group name="Object_118" position={[0, -827.199, 238.411]} scale={1000}>
                        <mesh
                          name="Roof_Base_CSR2_Base_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Roof_Base_CSR2_Base_0.geometry}
                          material={materials.CSR2_Base}
                        />
                      </group>
                    </group>
                    <group name="Roof_Carbon1">
                      <group name="Object_121" position={[0, -827.199, 238.411]} scale={1000}>
                        <mesh
                          name="Roof_Carbon1_CSR2_Global_Texture_Carbon1_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Roof_Carbon1_CSR2_Global_Texture_Carbon1_0.geometry}
                          material={materials.CSR2_Global_Texture_Carbon1}
                        />
                      </group>
                    </group>
                    <group name="Roof_Coloured">
                      <group name="Object_124" position={[0, -827.199, 238.411]} scale={1000}>
                        <mesh
                          name="Roof_Coloured_CSR2_Global_Texture_Coloured_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Roof_Coloured_CSR2_Global_Texture_Coloured_0.geometry}
                          material={materials.CSR2_Global_Texture_Coloured}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="SteeringWheel"
                    position={[0.226, 0.611, 0.509]}
                    rotation={[0.033, -0.079, 0.003]}>
                    <group name="SteeringWheel_Textured2">
                      <group
                        name="Object_128"
                        position={[-0.265, -0.626, -0.469]}
                        rotation={[-0.033, 0.079, 0]}>
                        <mesh
                          name="SteeringWheel_Textured2_CSR2_Textured2_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.SteeringWheel_Textured2_CSR2_Textured2_0.geometry}
                          material={materials.CSR2_Textured2}
                        />
                      </group>
                    </group>
                    <group name="SteeringWheel_Interior">
                      <group
                        name="Object_131"
                        position={[-0.265, -0.626, -0.469]}
                        rotation={[-0.033, 0.079, 0]}>
                        <mesh
                          name="SteeringWheel_Interior_CSR2_Interior_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.SteeringWheel_Interior_CSR2_Interior_0.geometry}
                          material={materials.CSR2_Interior}
                        />
                        <mesh
                          name="SteeringWheel_Interior_CSR2_InteriorA_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.SteeringWheel_Interior_CSR2_InteriorA_0.geometry}
                          material={materials.CSR2_InteriorA}
                        />
                      </group>
                    </group>
                    <group name="SteeringWheel_InteriorEmissive">
                      <group
                        name="Object_135"
                        position={[-0.265, -0.626, -0.469]}
                        rotation={[-0.033, 0.079, 0]}>
                        <mesh
                          name="SteeringWheel_InteriorEmissive_CSR2_Interior_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.SteeringWheel_InteriorEmissive_CSR2_Interior_0.geometry}
                          material={materials.CSR2_Interior}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="Badge">
                    <mesh
                      name="Badge_CSR2_Badge_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Badge_CSR2_Badge_0.geometry}
                      material={materials.CSR2_Badge}
                    />
                  </group>
                  <group name="Base">
                    <mesh
                      name="Base_CSR2_Base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Base_CSR2_Base_0.geometry}
                      material={materials.CSR2_Base}
                    />
                  </group>
                  <group name="Carbon1M">
                    <mesh
                      name="Carbon1M_CSR2_Global_Texture_Carbon1M_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Carbon1M_CSR2_Global_Texture_Carbon1M_0.geometry}
                      material={materials.CSR2_Global_Texture_Carbon1M}
                    />
                  </group>
                  <group name="Carbon1">
                    <mesh
                      name="Carbon1_CSR2_Global_Texture_Carbon1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Carbon1_CSR2_Global_Texture_Carbon1_0.geometry}
                      material={materials.CSR2_Global_Texture_Carbon1}
                    />
                  </group>
                  <group name="Carbon2">
                    <mesh
                      name="Carbon2_CSR2_Global_Texture_Carbon2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Carbon2_CSR2_Global_Texture_Carbon2_0.geometry}
                      material={materials.CSR2_Global_Texture_Carbon2}
                    />
                  </group>
                  <group name="Coloured">
                    <mesh
                      name="Coloured_CSR2_Global_Texture_Coloured_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Coloured_CSR2_Global_Texture_Coloured_0.geometry}
                      material={materials.CSR2_Global_Texture_Coloured}
                    />
                  </group>
                  <group name="Engine">
                    <mesh
                      name="Engine_CSR2_Engine_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Engine_CSR2_Engine_0.geometry}
                      material={materials.CSR2_Engine}
                    />
                    <mesh
                      name="Engine_CSR2_EngineA_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Engine_CSR2_EngineA_0.geometry}
                      material={materials.CSR2_EngineA}
                    />
                  </group>
                  <group name="Grille2">
                    <mesh
                      name="Grille2_CSR2_Grille2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Grille2_CSR2_Grille2_0.geometry}
                      material={materials.CSR2_Grille2}
                    />
                  </group>
                  <group name="Grille3">
                    <mesh
                      name="Grille3_CSR2_Grille3_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Grille3_CSR2_Grille3_0.geometry}
                      material={materials.CSR2_Grille3}
                    />
                  </group>
                  <group name="Grille1">
                    <mesh
                      name="Grille1_CSR2_Grille1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Grille1_CSR2_Grille1_0.geometry}
                      material={materials.CSR2_Grille1}
                    />
                  </group>
                  <group name="Grille4">
                    <mesh
                      name="Grille4_CSR2_Grille4_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Grille4_CSR2_Grille4_0.geometry}
                      material={materials.CSR2_Grille4}
                    />
                  </group>
                  <group name="InteriorTilling">
                    <mesh
                      name="InteriorTilling_CSR2_InteriorTilling_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.InteriorTilling_CSR2_InteriorTilling_0.geometry}
                      material={materials.CSR2_InteriorTilling}
                    />
                  </group>
                  <group name="Interior">
                    <mesh
                      name="Interior_CSR2_InteriorA_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Interior_CSR2_InteriorA_0.geometry}
                      material={materials.CSR2_InteriorA}
                    />
                    <mesh
                      name="Interior_CSR2_Interior_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Interior_CSR2_Interior_0.geometry}
                      material={materials.CSR2_Interior}
                    />
                  </group>
                  <group name="Light">
                    <mesh
                      name="Light_CSR2_Light_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Light_CSR2_Light_0.geometry}
                      material={materials.CSR2_Light}
                    />
                  </group>
                  <group name="ManufacturerPlate">
                    <mesh
                      name="ManufacturerPlate_CSR2_ManufacturerPlate_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.ManufacturerPlate_CSR2_ManufacturerPlate_0.geometry}
                      material={materials.CSR2_ManufacturerPlate}
                    />
                  </group>
                  <group name="Paint">
                    <mesh
                      name="Paint_CSR2_CarPaint_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Paint_CSR2_CarPaint_0.geometry}
                      material={materials.CSR2_CarPaint}
                    />
                  </group>
                  <group name="SeatBelt">
                    <mesh
                      name="SeatBelt_CSR2_Global_Texture_Coloured_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.SeatBelt_CSR2_Global_Texture_Coloured_0.geometry}
                      material={materials.CSR2_Global_Texture_Coloured}
                    />
                  </group>
                  <group name="Textured2">
                    <mesh
                      name="Textured2_CSR2_Textured2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Textured2_CSR2_Textured2_0.geometry}
                      material={materials.CSR2_Textured2}
                    />
                  </group>
                  <group name="Textured">
                    <mesh
                      name="Textured_CSR2_Textured_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Textured_CSR2_Textured_0.geometry}
                      material={materials.CSR2_Textured}
                    />
                  </group>
                  <group name="GlassInside">
                    <mesh
                      name="GlassInside_CSR2_Window_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.GlassInside_CSR2_Window_0.geometry}
                      material={materials.CSR2_Window}
                    />
                  </group>
                  <group name="Glass">
                    <mesh
                      name="Glass_CSR2_Window_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Glass_CSR2_Window_0.geometry}
                      material={materials.CSR2_Window}
                    />
                    <mesh
                      name="Glass_CSR2_GlassClear_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Glass_CSR2_GlassClear_0.geometry}
                      material={materials.CSR2_GlassClear}
                    />
                    <mesh
                      name="Glass_CSR2_GlassRed_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Glass_CSR2_GlassRed_0.geometry}
                      material={materials.CSR2_GlassRed}
                    />
                  </group>
                  <group name="InteriorZone1">
                    <mesh
                      name="InteriorZone1_CSR2_InteriorZone1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.InteriorZone1_CSR2_InteriorZone1_0.geometry}
                      material={materials.CSR2_InteriorZone1}
                    />
                  </group>
                  <group name="InteriorZone2">
                    <mesh
                      name="InteriorZone2_CSR2_InteriorZone2A_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.InteriorZone2_CSR2_InteriorZone2A_0.geometry}
                      material={materials.CSR2_InteriorZone2A}
                    />
                    <mesh
                      name="InteriorZone2_CSR2_InteriorZone2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.InteriorZone2_CSR2_InteriorZone2_0.geometry}
                      material={materials.CSR2_InteriorZone2}
                    />
                  </group>
                  <group name="InteriorEmissive">
                    <mesh
                      name="InteriorEmissive_CSR2_Interior_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.InteriorEmissive_CSR2_Interior_0.geometry}
                      material={materials.CSR2_Interior}
                    />
                  </group>
                </group>
                <group
                  name="Wheels01"
                  position={[0, 3.661, -0.701]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group
                    name="Wheel01_LF"
                    position={[7.89, -13.926, -0.178]}
                    rotation={[Math.PI / 2, 0, 0.026]}
                    scale={10}>
                    <mesh
                      name="Wheel01_LF_CSR2_Wheel1A_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wheel01_LF_CSR2_Wheel1A_0.geometry}
                      material={materials.CSR2_Wheel1A}
                    />
                  </group>
                  <group
                    name="Wheel01_RF"
                    position={[-7.89, -13.926, -0.178]}
                    rotation={[-Math.PI / 2, 0, -3.115]}
                    scale={10}>
                    <mesh
                      name="Wheel01_RF_CSR2_Wheel1A_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wheel01_RF_CSR2_Wheel1A_0.geometry}
                      material={materials.CSR2_Wheel1A}
                    />
                  </group>
                  <group
                    name="Wheel01_LR"
                    position={[7.415, 13.749, -0.001]}
                    rotation={[Math.PI / 2, 0, 0.017]}
                    scale={10}>
                    <mesh
                      name="Wheel01_LR_CSR2_Wheel1A_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wheel01_LR_CSR2_Wheel1A_0.geometry}
                      material={materials.CSR2_Wheel1A}
                    />
                  </group>
                  <group
                    name="Wheel01_RR"
                    position={[-7.415, 13.749, -0.001]}
                    rotation={[-Math.PI / 2, 0, -3.124]}
                    scale={10}>
                    <mesh
                      name="Wheel01_RR_CSR2_Wheel1A_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Wheel01_RR_CSR2_Wheel1A_0.geometry}
                      material={materials.CSR2_Wheel1A}
                    />
                  </group>
                </group>
                <group
                  name="Calipers"
                  position={[0, 3.451, -1.904]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <group
                    name="CaliperLF"
                    position={[7.89, -15.129, 0.032]}
                    rotation={[Math.PI / 2, 0, 0.026]}
                    scale={10}>
                    <group name="Object_201">
                      <mesh
                        name="CaliperLF_CSR2_CaliperZoneTextured_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperLF_CSR2_CaliperZoneTextured_0.geometry}
                        material={materials.CSR2_CaliperZoneTextured}
                      />
                      <mesh
                        name="CaliperLF_CSR2_CaliperZonePainted_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperLF_CSR2_CaliperZonePainted_0.geometry}
                        material={materials.CSR2_CaliperZonePainted}
                      />
                      <mesh
                        name="CaliperLF_CSR2_CaliperBadge_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperLF_CSR2_CaliperBadge_0.geometry}
                        material={materials.CSR2_CaliperBadge}
                      />
                    </group>
                  </group>
                  <group
                    name="CaliperRF"
                    position={[-7.89, -15.129, 0.032]}
                    rotation={[-Math.PI / 2, 0, -3.115]}
                    scale={10}>
                    <group name="Object_206" rotation={[-Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
                      <mesh
                        name="CaliperRF_CSR2_CaliperZoneTextured_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperRF_CSR2_CaliperZoneTextured_0.geometry}
                        material={materials.CSR2_CaliperZoneTextured}
                      />
                      <mesh
                        name="CaliperRF_CSR2_CaliperZonePainted_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperRF_CSR2_CaliperZonePainted_0.geometry}
                        material={materials.CSR2_CaliperZonePainted}
                      />
                      <mesh
                        name="CaliperRF_CSR2_CaliperBadge_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperRF_CSR2_CaliperBadge_0.geometry}
                        material={materials.CSR2_CaliperBadge}
                      />
                    </group>
                  </group>
                  <group
                    name="CaliperLR"
                    position={[7.415, 12.546, 0.209]}
                    rotation={[Math.PI / 2, 0, 0.017]}
                    scale={10}>
                    <group name="Object_211">
                      <mesh
                        name="CaliperLR_CSR2_CaliperZoneTextured_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperLR_CSR2_CaliperZoneTextured_0.geometry}
                        material={materials.CSR2_CaliperZoneTextured}
                      />
                      <mesh
                        name="CaliperLR_CSR2_CaliperZonePainted_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperLR_CSR2_CaliperZonePainted_0.geometry}
                        material={materials.CSR2_CaliperZonePainted}
                      />
                      <mesh
                        name="CaliperLR_CSR2_CaliperBadge_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperLR_CSR2_CaliperBadge_0.geometry}
                        material={materials.CSR2_CaliperBadge}
                      />
                    </group>
                  </group>
                  <group
                    name="CaliperRR"
                    position={[-7.415, 12.546, 0.209]}
                    rotation={[-Math.PI / 2, 0, -3.124]}
                    scale={10}>
                    <group name="Object_216" rotation={[Math.PI, 0, Math.PI]} scale={[-1, 1, 1]}>
                      <mesh
                        name="CaliperRR_CSR2_CaliperZoneTextured_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperRR_CSR2_CaliperZoneTextured_0.geometry}
                        material={materials.CSR2_CaliperZoneTextured}
                      />
                      <mesh
                        name="CaliperRR_CSR2_CaliperZonePainted_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperRR_CSR2_CaliperZonePainted_0.geometry}
                        material={materials.CSR2_CaliperZonePainted}
                      />
                      <mesh
                        name="CaliperRR_CSR2_CaliperBadge_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.CaliperRR_CSR2_CaliperBadge_0.geometry}
                        material={materials.CSR2_CaliperBadge}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/2022__aston_martin_valkyrie_spider.glb')


