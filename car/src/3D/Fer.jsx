import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Fer(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/airtsel_valor_proiettile.glb"
  );
  const { actions, names } = useAnimations(animations, group);
  const [animationPlaying, setAnimationPlaying] = useState(false);
  useEffect(() => {
    if (actions && names.length > 0 && !animationPlaying) {
      actions[names[0]].play();
      setAnimationPlaying(true);
    }
  }, [actions, names, animationPlaying]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="06b727c821684df5bd0843b770bad954fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.025}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="box00"
                  position={[-0.812, 17.457, 0]}
                  rotation={[-Math.PI / 2, 0, Math.PI]}
                >
                  <group name="Object_5" position={[-64.237, 0, -17.457]}>
                    <mesh
                      name="box00_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box00_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group name="box01" position={[-64.237, 0, -17.457]}>
                    <mesh
                      name="box01_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box01_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group
                    name="box02"
                    position={[-5.105, 26.426, 2.839]}
                    rotation={[-1.484, 0, -Math.PI]}
                    scale={0.011}
                  >
                    <mesh
                      name="box02_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box02_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group
                    name="box03"
                    position={[-5.105, -26.426, 2.839]}
                    rotation={[1.484, 0, 0]}
                    scale={0.011}
                  >
                    <mesh
                      name="box03_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box03_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group name="box04" position={[-64.237, 0, -17.457]}>
                    <mesh
                      name="box04_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box04_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                    <group
                      name="box05"
                      position={[61.589, -25.68, 11.913]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[-0.392, -0.392, -0.338]}
                    >
                      <mesh
                        name="box05_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box05_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box06"
                      position={[61.486, 25.68, 16.253]}
                      rotation={[Math.PI, 0, -Math.PI]}
                      scale={[-0.392, -0.392, -0.338]}
                    >
                      <group
                        name="Object_18"
                        position={[0.262, 131.146, -12.83]}
                      >
                        <mesh
                          name="box06_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box06_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box07"
                      position={[90.856, -23.272, 20.536]}
                      scale={[0.401, 0.401, 0.247]}
                    >
                      <mesh
                        name="box07_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box07_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                  </group>
                  <group
                    name="box08"
                    position={[65.875, 0, 5.529]}
                    rotation={[0, 1.222, -Math.PI / 2]}
                    scale={0.017}
                  >
                    <mesh
                      name="box08_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box08_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group
                    name="box09"
                    position={[-53.671, 12.669, 1.958]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={0.824}
                  >
                    <mesh
                      name="box09_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box09_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group
                    name="box10"
                    position={[45.602, 10.566, 9.82]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={0.824}
                  >
                    <mesh
                      name="box10_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box10_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group name="box11" position={[-64.237, 0, -17.457]}>
                    <mesh
                      name="box11_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box11_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                    <group
                      name="box12"
                      position={[47.961, -31.869, 19.722]}
                      rotation={[Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name="box12_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box12_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group name="box13">
                      <mesh
                        name="box13_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box13_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                  </group>
                  <group
                    name="box14"
                    position={[19.571, -31.869, 2.266]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="box14_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box14_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group
                    name="box15"
                    position={[-0.554, -26.253, 9.193]}
                    rotation={[-0.035, 0, -1.58]}
                    scale={30.551}
                  >
                    <group name="Object_37" position={[-0.115, 0.331, 0.057]}>
                      <mesh
                        name="box15_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box15_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                  </group>
                  <group name="box16" position={[-64.237, 0, -17.457]}>
                    <mesh
                      name="box16_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box16_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                    <group name="box17" position={[11.732, 0, 20.836]}>
                      <group name="Object_42" position={[-11.732, 0, -20.836]}>
                        <mesh
                          name="box17_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box17_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                      <group
                        name="box18"
                        position={[44.387, -12.164, 6.129]}
                        rotation={[-0.013, 1.113, -Math.PI / 2]}
                        scale={26.011}
                      >
                        <mesh
                          name="box18_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box18_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="box19" position={[45.602, 10.566, 9.82]}>
                    <group
                      name="Object_47"
                      position={[-109.838, -10.566, -27.277]}
                    >
                      <mesh
                        name="box19_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box19_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group name="box20" position={[-109.838, -10.566, -27.277]}>
                      <mesh
                        name="box20_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box20_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                      <group
                        name="box21"
                        position={[130.683, 11.111, 25.683]}
                        rotation={[-Math.PI, 0.862, -Math.PI / 2]}
                        scale={0.011}
                      >
                        <mesh
                          name="box21_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box21_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box22"
                      position={[-18.969, -15.348, 46.236]}
                      rotation={[-0.001, -0.554, -1.573]}
                      scale={30.551}
                    >
                      <mesh
                        name="box22_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box22_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                      <group name="box23" position={[0.002, 0.244, -2.05]}>
                        <group
                          name="Object_56"
                          position={[-0.002, -0.244, 2.05]}
                        >
                          <mesh
                            name="box23_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box23_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="box24"
                      position={[-18.969, -5.428, 46.236]}
                      rotation={[-0.001, -0.554, -1.573]}
                      scale={30.551}
                    >
                      <mesh
                        name="box24_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box24_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                      <group name="box25" position={[0.002, 0.244, -2.05]}>
                        <group
                          name="Object_61"
                          position={[-0.002, -0.244, 2.05]}
                        >
                          <mesh
                            name="box25_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box25_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="box26"
                      position={[0, -2.51, 0]}
                      rotation={[Math.PI / 2, 0, -2.269]}
                      scale={0.824}
                    >
                      <group
                        name="Object_64"
                        position={[-3.931, 0.688, -0.259]}
                      >
                        <mesh
                          name="box26_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box26_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group name="box27">
                      <group
                        name="Object_67"
                        position={[-109.838, -10.566, -27.277]}
                      >
                        <mesh
                          name="box27_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box27_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="box28" position={[-53.671, 10.159, 1.958]}>
                    <group
                      name="Object_70"
                      position={[-10.565, -10.159, -19.415]}
                    >
                      <mesh
                        name="box28_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box28_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group name="box29" position={[1.167, -10.159, 1.421]}>
                      <group name="Object_73" position={[-11.732, 0, -20.836]}>
                        <mesh
                          name="box29_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box29_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group name="box30" position={[1.167, -10.159, 1.299]}>
                      <group name="Object_76" position={[-11.732, 0, -20.836]}>
                        <mesh
                          name="box30_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box30_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                      <group
                        name="box31"
                        position={[-1.167, 10.159, -1.299]}
                        rotation={[Math.PI / 2, 0, -2.007]}
                        scale={0.824}
                      >
                        <group
                          name="Object_79"
                          position={[-3.931, 0.688, -0.259]}
                        >
                          <mesh
                            name="box31_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box31_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                      </group>
                      <group
                        name="box32"
                        position={[32.172, -12.17, 4.127]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={0.207}
                      >
                        <group name="Object_82" position={[0, 0, -3.034]}>
                          <mesh
                            name="box32_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box32_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="box34"
                      position={[41.643, -26.922, 7.884]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={30.551}
                    >
                      <group
                        name="Object_85"
                        position={[-0.549, 0.576, -0.036]}
                      >
                        <mesh
                          name="box34_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box34_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="box35"
                    position={[-0.535, 26.408, 9.193]}
                    rotation={[3.106, 0, 1.58]}
                    scale={-30.551}
                  >
                    <group name="Object_88" position={[-0.115, 0.331, 0.057]}>
                      <mesh
                        name="box35_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box35_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                  </group>
                  <group
                    name="box36"
                    position={[-61.928, 0, -0.199]}
                    rotation={[0, -0.399, Math.PI / 2]}
                    scale={0.023}
                  >
                    <mesh
                      name="box36_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box36_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group name="box37" position={[-64.716, 0, -17.457]}>
                    <mesh
                      name="box37_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box37_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                    <group
                      name="box38"
                      position={[13.964, 22.559, 20.096]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={37.284}
                    >
                      <group
                        name="Object_95"
                        position={[-0.52, -1.954, -0.358]}
                      >
                        <mesh
                          name="box38_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box38_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                        <mesh
                          name="box38_Material_#1350_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box38_Material_#1350_0"].geometry}
                          material={materials.Material_1350}
                        />
                      </group>
                    </group>
                    <group
                      name="box39"
                      position={[86.824, 3.19, 6.74]}
                      rotation={[0, 0, Math.PI / 2]}
                      scale={37.284}
                    >
                      <mesh
                        name="box39_Material_#1315_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box39_Material_#1315_0"].geometry}
                        material={materials.Material_1315}
                      />
                    </group>
                    <group name="box40" position={[0.205, 0, 0]}>
                      <mesh
                        name="box40_Material_#1315_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box40_Material_#1315_0"].geometry}
                        material={materials.Material_1315}
                      />
                    </group>
                  </group>
                  <group
                    name="box41"
                    position={[-56.88, -19.219, -5.266]}
                    rotation={[0, -1.571, 0]}
                  >
                    <mesh
                      name="box41_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box41_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                    <group
                      name="box42"
                      position={[0, 19.219, 0.979]}
                      rotation={[Math.PI / 2, Math.PI / 2, 0]}
                      scale={37.284}
                    >
                      <group
                        name="Object_105"
                        position={[0.006, -2.29, -0.358]}
                      >
                        <mesh
                          name="box42_Material_#1350_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box42_Material_#1350_0"].geometry}
                          material={materials.Material_1350}
                        />
                        <mesh
                          name="box42_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box42_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box43"
                      position={[-11.633, 22.061, -50.141]}
                      rotation={[Math.PI / 2, Math.PI / 2, 0]}
                      scale={30.551}
                    >
                      <mesh
                        name="box43_Material_#1315_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box43_Material_#1315_0"].geometry}
                        material={materials.Material_1315}
                      />
                    </group>
                  </group>
                  <group
                    name="box44"
                    position={[4.432, 0, -14.89]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={30.551}
                  >
                    <mesh
                      name="box44_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box44_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                    <group name="box45">
                      <mesh
                        name="box45_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box45_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group name="box46" position={[0.455, 2.212, 0.292]}>
                      <group
                        name="Object_115"
                        position={[-0.362, -1.954, -0.358]}
                      >
                        <mesh
                          name="box46_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box46_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                        <mesh
                          name="box46_Material_#1350_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box46_Material_#1350_0"].geometry}
                          material={materials.Material_1350}
                        />
                      </group>
                      <group name="box47" position={[-0.362, -1.954, -0.358]}>
                        <mesh
                          name="box47_Material_#1315_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box47_Material_#1315_0"].geometry}
                          material={materials.Material_1315}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="box48"
                    position={[66.925, 0, -3.516]}
                    rotation={[0, 0, Math.PI / 2]}
                    scale={31.733}
                  >
                    <group name="Object_121" position={[0, 2.177, -0.305]}>
                      <mesh
                        name="box48_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box48_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group name="box49" position={[0, 2.177, -0.305]}>
                      <mesh
                        name="box49_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box49_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group name="box50" position={[0, 2.177, -0.305]}>
                      <mesh
                        name="box50_Material_#1315_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box50_Material_#1315_0"].geometry}
                        material={materials.Material_1315}
                      />
                    </group>
                  </group>
                  <group
                    name="box51"
                    position={[66.601, -17.238, 4.595]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[1.077, 1.077, 0.751]}
                  >
                    <mesh
                      name="box51_Material_#1315_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box51_Material_#1315_0"].geometry}
                      material={materials.Material_1315}
                    />
                  </group>
                  <group
                    name="box52"
                    position={[66.571, 0, -0.065]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={26.011}
                  >
                    <group name="Object_130" position={[0, -2.851, 0.189]}>
                      <mesh
                        name="box52_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box52_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                  </group>
                  <group
                    name="box53"
                    position={[26.633, -4.782, 56.055]}
                    rotation={[-0.001, -0.554, -1.573]}
                    scale={30.551}
                  >
                    <mesh
                      name="box53_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box53_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group name="box54" position={[12.59, 0, -0.498]}>
                    <group name="Object_135" position={[-76.826, 0, -16.959]}>
                      <mesh
                        name="box54_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box54_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box55"
                      position={[40.136, -20.524, 16.696]}
                      rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                      scale={-1}
                    >
                      <mesh
                        name="box55_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box55_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box56"
                      position={[-31.104, -22.639, -10.352]}
                      rotation={[Math.PI / 2, 1.571, 0]}
                    >
                      <mesh
                        name="box56_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box56_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                      <group
                        name="box57"
                        position={[11.262, 0.845, 87.191]}
                        rotation={[-Math.PI, Math.PI / 2, 0]}
                        scale={-0.41}
                      >
                        <mesh
                          name="box57_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box57_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                        <group
                          name="box58"
                          position={[79.65, 1.249, -0.157]}
                          rotation={[-3.054, 0, -Math.PI / 2]}
                          scale={-1.049}
                        >
                          <mesh
                            name="box58_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box58_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box59"
                          position={[73.503, -0.45, 14.645]}
                          rotation={[1.484, 0, -Math.PI / 2]}
                          scale={-1.049}
                        >
                          <mesh
                            name="box59_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box59_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box60"
                          position={[72.672, 0.711, 14.54]}
                          rotation={[1.484, 0, -Math.PI / 2]}
                          scale={-1.049}
                        >
                          <group name="Object_148" rotation={[0, 0.087, 0]}>
                            <mesh
                              name="box60_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box60_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                          <group
                            name="box61"
                            position={[3.073, 1.37, 8.349]}
                            rotation={[Math.PI, 1.484, -Math.PI]}
                          >
                            <group name="Object_151" position={[0, 7.744, 0]}>
                              <mesh
                                name="box61_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box61_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                          </group>
                          <group
                            name="box62"
                            position={[5.309, 0, 8.154]}
                            rotation={[-3.142, 1.484, -0.436]}
                            scale={[0.906, 0.906, 1.587]}
                          >
                            <mesh
                              name="box62_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box62_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box71"
                          position={[73.503, 18.478, 13.117]}
                          rotation={[1.484, 0, -Math.PI / 2]}
                          scale={-1.049}
                        >
                          <mesh
                            name="box71_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box71_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box72"
                          position={[79.65, 20.36, -3.891]}
                          rotation={[-3.054, 0, -Math.PI / 2]}
                          scale={-1.049}
                        >
                          <mesh
                            name="box72_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box72_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box73"
                          position={[78.18, 15.777, -2.662]}
                          rotation={[-2.269, 0, -Math.PI / 2]}
                          scale={-1.049}
                        >
                          <mesh
                            name="box73_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box73_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box74"
                          position={[80.039, 3.983, 7.234]}
                          rotation={[0.873, 0, -Math.PI / 2]}
                          scale={-1.049}
                        >
                          <mesh
                            name="box74_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box74_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box75"
                          position={[78.18, 2.534, 8.45]}
                          rotation={[0.873, 0, -Math.PI / 2]}
                          scale={-1.049}
                        >
                          <mesh
                            name="box75_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box75_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box76"
                          position={[66.717, 2.718, -27.778]}
                          rotation={[Math.PI / 2, 0, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box76_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box76_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box77"
                          position={[238.373, -8.37, -27.68]}
                          rotation={[Math.PI, 0, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box77_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box77_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box78"
                          position={[79.215, 2.808, -27.68]}
                          rotation={[Math.PI / 2, 1.571, 0]}
                          scale={[-2.725, -2.725, -3.056]}
                        >
                          <mesh
                            name="box78_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box78_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                          <group
                            name="box79"
                            position={[-1.398, -2.246, 2.141]}
                            rotation={[Math.PI / 2, 0, 0]}
                            scale={[0.721, 0.643, 0.721]}
                          >
                            <mesh
                              name="box79_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box79_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box80"
                          position={[149.225, -4.529, -27.68]}
                          rotation={[Math.PI / 2, 1.571, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box80_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box80_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box81"
                          position={[22.177, 7.031, -27.778]}
                          rotation={[Math.PI, 0, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box81_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box81_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box82"
                          position={[16.668, 4.297, -8.696]}
                          rotation={[Math.PI / 2, 1.222, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box82_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box82_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box83"
                          position={[217.487, 3.377, -27.68]}
                          rotation={[Math.PI / 2, 1.571, 0]}
                          scale={-2.631}
                        >
                          <mesh
                            name="box83_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box83_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                          <group
                            name="box84"
                            position={[-0.515, 0, 22.569]}
                            rotation={[0, 0, Math.PI / 2]}
                            scale={0.479}
                          >
                            <mesh
                              name="box84_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box84_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box85"
                          position={[264.403, -0.132, 1.79]}
                          rotation={[-3.054, 0, -Math.PI / 2]}
                          scale={-1}
                        >
                          <mesh
                            name="box85_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box85_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box86"
                          position={[258.542, 16.297, 14.448]}
                          rotation={[1.484, 0, -Math.PI / 2]}
                          scale={-1}
                        >
                          <mesh
                            name="box86_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box86_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                          <group
                            name="box87"
                            position={[-0.125, 0.793, -16.994]}
                          >
                            <group name="Object_188" rotation={[0, 0.087, 0]}>
                              <mesh
                                name="box87_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box87_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                            <group
                              name="box88"
                              position={[3.073, 1.37, 8.349]}
                              rotation={[Math.PI, 1.484, -Math.PI]}
                            >
                              <group name="Object_191" position={[0, 7.744, 0]}>
                                <mesh
                                  name="box88_Material_#1313_0"
                                  castShadow
                                  receiveShadow
                                  geometry={
                                    nodes["box88_Material_#1313_0"].geometry
                                  }
                                  material={materials.Material_1313}
                                />
                              </group>
                            </group>
                            <group
                              name="box89"
                              position={[5.45, 0, 8.141]}
                              rotation={[-3.142, 1.484, -0.436]}
                              scale={[0.906, 0.906, 1.592]}
                            >
                              <mesh
                                name="box89_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box89_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                          </group>
                          <group
                            name="box98"
                            position={[-86.947, 0.793, -9.398]}
                            rotation={[0, 0.175, 0]}
                          >
                            <group
                              name="Object_196"
                              position={[86.821, 0, 7.596]}
                              rotation={[0, -0.087, 0]}
                            >
                              <mesh
                                name="box98_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box98_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                            <group
                              name="box99"
                              position={[90.774, 0, 16.56]}
                              rotation={[0, 1.484, 2.705]}
                              scale={[0.906, 0.906, 1.592]}
                            >
                              <mesh
                                name="box99_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box99_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                            <group
                              name="box108"
                              position={[88.398, 1.369, 16.352]}
                              rotation={[0, 1.484, 0]}
                            >
                              <group name="Object_201" position={[0, 7.744, 0]}>
                                <mesh
                                  name="box108_Material_#1313_0"
                                  castShadow
                                  receiveShadow
                                  geometry={
                                    nodes["box108_Material_#1313_0"].geometry
                                  }
                                  material={materials.Material_1313}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group
                          name="box109"
                          position={[264.403, 18.091, -1.77]}
                          rotation={[-3.054, 0, -Math.PI / 2]}
                          scale={-1}
                        >
                          <mesh
                            name="box109_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box109_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box110"
                          position={[256.781, 1.093, 9.998]}
                          rotation={[0.873, 0, -Math.PI / 2]}
                          scale={-1}
                        >
                          <mesh
                            name="box110_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box110_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box111"
                          position={[258.554, 2.476, 8.838]}
                          rotation={[0.873, 0, -Math.PI / 2]}
                          scale={-1}
                        >
                          <mesh
                            name="box111_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box111_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box112"
                          position={[256.781, 13.721, -0.598]}
                          rotation={[-2.269, 0, -Math.PI / 2]}
                          scale={-1}
                        >
                          <mesh
                            name="box112_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box112_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box113"
                          position={[282.677, 19.28, -24.144]}
                          rotation={[Math.PI / 2, 0, 0]}
                          scale={[-1.919, -1.919, -3.074]}
                        >
                          <mesh
                            name="box113_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box113_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box114"
                          position={[305.496, 15.078, -27.778]}
                          rotation={[0, 0, -0.875]}
                          scale={[-1.324, -0.432, -1.08]}
                        >
                          <mesh
                            name="box114_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box114_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box115"
                          position={[246.342, 37.789, -27.778]}
                          rotation={[Math.PI, 0, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box115_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box115_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box116"
                          position={[232.095, 30.095, -23.521]}
                          rotation={[Math.PI / 2, 0, 0]}
                          scale={-0.977}
                        >
                          <mesh
                            name="box116_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box116_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box117"
                          position={[283.092, 9.958, -27.697]}
                          rotation={[3.142, 0, 0]}
                          scale={-1}
                        >
                          <mesh
                            name="box117_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box117_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box118"
                          position={[283.092, 10.987, -27.697]}
                          rotation={[-3.054, 0, 0]}
                          scale={-1}
                        >
                          <mesh
                            name="box118_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box118_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box119"
                          position={[238.291, 37.177, -27.778]}
                          rotation={[Math.PI, 0, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box119_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box119_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                          <group
                            name="box120"
                            position={[-3.732, -3.269, 5.965]}
                            rotation={[-Math.PI / 4, 0, 0]}
                            scale={0.178}
                          >
                            <group name="Object_226" position={[0, -2.093, -2]}>
                              <mesh
                                name="box120_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box120_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                          </group>
                          <group
                            name="box121"
                            position={[-3.732, -3.269, -5.918]}
                            rotation={[-2.356, 0, -Math.PI]}
                            scale={0.178}
                          >
                            <group name="Object_229" position={[0, -2.093, -2]}>
                              <mesh
                                name="box121_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box121_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                          </group>
                          <group
                            name="box122"
                            position={[-3.732, -5.76, 8.456]}
                            rotation={[-Math.PI / 4, 0, 0]}
                            scale={0.178}
                          >
                            <group name="Object_232" position={[0, -2.093, -2]}>
                              <mesh
                                name="box122_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box122_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                          </group>
                          <group
                            name="box123"
                            position={[-3.732, -5.776, -8.425]}
                            rotation={[-2.356, 0, Math.PI]}
                            scale={0.178}
                          >
                            <group name="Object_235" position={[0, -2.093, -2]}>
                              <mesh
                                name="box123_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box123_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="box124"
                          position={[246.279, 29.3, -27.778]}
                          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                          scale={-2.772}
                        >
                          <group
                            name="Object_238"
                            position={[0, -4.959, -8.694]}
                          >
                            <mesh
                              name="box124_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box124_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box125"
                          position={[300.415, 11.371, -27.778]}
                          rotation={[-Math.PI, 0, 0.698]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box125_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box125_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box126"
                          position={[300.943, 12.458, 3.08]}
                          rotation={[Math.PI / 2, 0, 0]}
                          scale={-1.526}
                        >
                          <mesh
                            name="box126_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box126_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box127"
                          position={[304.757, 14.303, -41.734]}
                          rotation={[Math.PI / 2, -0.087, -0.436]}
                          scale={[-0.991, -0.991, -2.442]}
                        >
                          <group
                            name="Object_245"
                            position={[-3.994, 1.933, 20.479]}
                          >
                            <mesh
                              name="box127_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box127_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box128"
                          position={[305.88, 15.625, -41.734]}
                          rotation={[Math.PI / 2, -0.087, -0.436]}
                          scale={[-0.991, -0.991, -2.442]}
                        >
                          <group
                            name="Object_248"
                            position={[-3.994, 1.933, 20.479]}
                          >
                            <mesh
                              name="box128_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box128_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box129"
                          position={[299.591, 16.352, -14.905]}
                          rotation={[Math.PI / 2, 0.873, 0.96]}
                          scale={-2.89}
                        >
                          <mesh
                            name="box129_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box129_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box130"
                          position={[243.149, 11.695, -27.778]}
                          rotation={[-Math.PI, 0, 0]}
                          scale={-2.961}
                        >
                          <mesh
                            name="box130_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box130_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box131"
                          position={[217.562, 30.445, -8.693]}
                          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                          scale={63.507}
                        >
                          <group
                            name="Object_255"
                            position={[0.27, 1.292, 0.059]}
                          >
                            <mesh
                              name="box131_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box131_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box132"
                          position={[205.507, 22.714, -27.68]}
                          rotation={[Math.PI / 2, 0, 0]}
                          scale={[-2.543, -2.543, -2.068]}
                        >
                          <mesh
                            name="box132_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box132_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box133"
                          position={[205.507, 25.926, -27.68]}
                          rotation={[Math.PI / 2, 0, Math.PI / 6]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box133_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box133_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box134"
                          position={[213.028, 19.28, -24.144]}
                          rotation={[Math.PI / 2, 0, 0]}
                          scale={[-1.919, -1.919, -3.074]}
                        >
                          <mesh
                            name="box134_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box134_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box135"
                          position={[252.589, 31.171, -18.716]}
                          rotation={[-Math.PI, 0, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box135_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box135_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box136"
                          position={[192.309, 9.487, -27.68]}
                          rotation={[-Math.PI, 1.571, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box136_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box136_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box137"
                          position={[203.189, 18.546, 1.135]}
                          rotation={[Math.PI / 2, 0, Math.PI / 2]}
                          scale={-1.187}
                        >
                          <mesh
                            name="box137_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box137_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box138"
                          position={[236.656, 24.512, -61.946]}
                          rotation={[Math.PI, 0, -Math.PI]}
                          scale={2.442}
                        >
                          <group
                            name="Object_270"
                            position={[-6.526, 2.728, 13.12]}
                          >
                            <mesh
                              name="box138_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box138_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box139"
                          position={[230.079, 24.512, -63.876]}
                          rotation={[Math.PI, 0, -Math.PI]}
                          scale={2.442}
                        >
                          <group
                            name="Object_273"
                            position={[-6.526, 2.728, 13.12]}
                          >
                            <mesh
                              name="box139_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box139_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box140"
                          position={[199.967, 27.257, -56.374]}
                          rotation={[-Math.PI, 1.571, 0]}
                          scale={-2.442}
                        >
                          <group
                            name="Object_276"
                            position={[-6.526, 2.728, 13.12]}
                          >
                            <mesh
                              name="box140_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box140_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box141"
                          position={[205.682, 33.286, -2.269]}
                          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box141_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box141_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box142"
                          position={[249.776, 31.171, -6.294]}
                          rotation={[-Math.PI, 0, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box142_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box142_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box143"
                          position={[237.332, 24.512, 8.388]}
                          rotation={[-Math.PI, 0, 0]}
                          scale={-2.442}
                        >
                          <group
                            name="Object_283"
                            position={[-6.526, 2.728, 13.12]}
                          >
                            <mesh
                              name="box143_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box143_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box144"
                          position={[206.18, 33.286, 12.884]}
                          rotation={[Math.PI / 2, 0, Math.PI]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box144_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box144_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box145"
                          position={[260.405, 30.912, 2.241]}
                          scale={-0.729}
                        >
                          <group name="Object_288" position={[0, 0, -2.59]}>
                            <mesh
                              name="box145_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box145_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                        <group
                          name="box147"
                          position={[258.343, 7.972, 38.887]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box147_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box147_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box148"
                          position={[324.519, -18.195, -27.778]}
                          rotation={[Math.PI / 2, 0, 0]}
                          scale={-2.442}
                        >
                          <mesh
                            name="box148_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box148_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="box149"
                      position={[4.78, -11.4, -0.197]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={26.011}
                    >
                      <group
                        name="Object_295"
                        position={[-0.412, -0.286, 0.518]}
                      >
                        <mesh
                          name="box149_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box149_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                      <group
                        name="box150"
                        position={[0.191, 0.012, -0.347]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={0.038}
                      >
                        <mesh
                          name="box150_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box150_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                        <group name="box151">
                          <mesh
                            name="box151_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box151_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="box152" position={[-76.826, 0, -16.959]}>
                      <mesh
                        name="box152_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box152_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                      <group
                        name="box153"
                        position={[67.819, -13.712, 22.118]}
                        rotation={[0, 0.087, -Math.PI / 2]}
                        scale={26.011}
                      >
                        <group
                          name="Object_304"
                          position={[-0.516, 0.42, -0.06]}
                        >
                          <mesh
                            name="box153_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box153_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group
                          name="box154"
                          position={[-0.096, 0.233, 0.071]}
                          rotation={[0.306, 0, 0]}
                          scale={0.824}
                        >
                          <mesh
                            name="box154_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box154_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                      </group>
                      <group name="box155" position={[66.061, -11.233, 23.645]}>
                        <mesh
                          name="box155_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box155_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                        <group
                          name="box156"
                          position={[3.089, 1.789, 2.19]}
                          rotation={[0, 1.493, -Math.PI / 2]}
                          scale={0.644}
                        >
                          <mesh
                            name="box156_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box156_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                          <mesh
                            name="box156_Material_#1350_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box156_Material_#1350_0"].geometry}
                            material={materials.Material_1350}
                          />
                          <group
                            name="box157"
                            position={[0.001, -0.001, -0.201]}
                            rotation={[0.004, -0.047, 1.222]}
                            scale={[1.093, 1.079, 0.942]}
                          >
                            <mesh
                              name="box157_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box157_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                          <group
                            name="box158"
                            rotation={[0.01, 0, 0]}
                            scale={[1.132, 1.132, 1]}
                          >
                            <mesh
                              name="box158_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box158_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                          <group
                            name="box159"
                            position={[5.739, 0, 0]}
                            rotation={[0.01, -0.002, 0.175]}
                            scale={[1.134, 1.132, 0.998]}
                          >
                            <mesh
                              name="box159_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box159_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                      </group>
                      <group
                        name="box160"
                        position={[68.708, -0.045, 25.032]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                        scale={[0.728, 0.728, 0.644]}
                      >
                        <mesh
                          name="box160_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box160_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                        <group
                          name="box161"
                          position={[-3.624, 0.04, 0.495]}
                          rotation={[0, 0.001, Math.PI / 2]}
                          scale={[0.96, 0.96, 1.086]}
                        >
                          <mesh
                            name="box161_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box161_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                          <group
                            name="box162"
                            position={[0, -3.776, 0.578]}
                            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
                            scale={1.861}
                          >
                            <mesh
                              name="box162_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box162_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                          <group
                            name="box163"
                            position={[0, 0, -0.366]}
                            scale={1.271}
                          >
                            <mesh
                              name="box163_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box163_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                            <group
                              name="box164"
                              position={[0, 0, 0.665]}
                              scale={1.281}
                            >
                              <mesh
                                name="box164_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box164_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                          </group>
                          <group
                            name="box165"
                            position={[0, -7.549, -0.366]}
                            scale={1.271}
                          >
                            <mesh
                              name="box165_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box165_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                            <group
                              name="box166"
                              position={[0, 0, 0.665]}
                              scale={1.281}
                            >
                              <mesh
                                name="box166_Material_#1313_0"
                                castShadow
                                receiveShadow
                                geometry={
                                  nodes["box166_Material_#1313_0"].geometry
                                }
                                material={materials.Material_1313}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="box167"
                        position={[73.113, 0, 22.309]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={26.011}
                      >
                        <mesh
                          name="box167_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box167_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                      <group
                        name="box168"
                        position={[68.41, 0, 21.791]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={26.011}
                      >
                        <group name="Object_336" position={[0, 0.604, 0.092]}>
                          <mesh
                            name="box168_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box168_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="box169" position={[0.264, -0.152, -10.755]}>
                      <mesh
                        name="box169_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box169_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                      <group
                        name="box170"
                        position={[-3.518, 0.378, 10.081]}
                        rotation={[0, 0, -Math.PI / 2]}
                        scale={26.011}
                      >
                        <group
                          name="Object_341"
                          position={[-0.001, 0.206, 0.101]}
                        >
                          <mesh
                            name="box170_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box170_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                      </group>
                      <group
                        name="box171"
                        position={[-8.138, -1.618, 7.272]}
                        rotation={[Math.PI / 2, 0, 2.618]}
                        scale={-0.536}
                      >
                        <mesh
                          name="box171_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box171_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box172"
                      position={[-9.833, -13.784, 9.274]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={30.551}
                    >
                      <mesh
                        name="box172_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box172_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                      <group name="box173">
                        <mesh
                          name="box173_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box173_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box174"
                      position={[-22.174, -16.713, -5.945]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={26.011}
                    >
                      <group name="Object_350" position={[-0.501, 0.75, 0.365]}>
                        <mesh
                          name="box174_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box174_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                      <group name="box175">
                        <group
                          name="Object_353"
                          position={[-0.501, 0.75, 0.365]}
                        >
                          <mesh
                            name="box175_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box175_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group name="box176" position={[0, -0.006, 0]}>
                          <group
                            name="Object_356"
                            position={[-0.501, 0.75, 0.365]}
                          >
                            <mesh
                              name="box176_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box176_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group
                      name="box177"
                      position={[-22.174, -12.799, -5.945]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={26.011}
                    >
                      <group name="Object_359" position={[-0.501, 0.75, 0.365]}>
                        <mesh
                          name="box177_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box177_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                      <group name="box178">
                        <group
                          name="Object_362"
                          position={[-0.501, 0.75, 0.365]}
                        >
                          <mesh
                            name="box178_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box178_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group name="box179" position={[0, -0.006, 0]}>
                          <group
                            name="Object_365"
                            position={[-0.501, 0.75, 0.365]}
                          >
                            <mesh
                              name="box179_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box179_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                    <group
                      name="box180"
                      position={[-22.174, -8.716, -5.945]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={26.011}
                    >
                      <group name="Object_368" position={[-0.501, 0.75, 0.365]}>
                        <mesh
                          name="box180_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box180_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                      <group name="box181">
                        <group
                          name="Object_371"
                          position={[-0.501, 0.75, 0.365]}
                        >
                          <mesh
                            name="box181_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box181_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                        <group name="box182" position={[0, -0.006, 0]}>
                          <group
                            name="Object_374"
                            position={[-0.501, 0.75, 0.365]}
                          >
                            <mesh
                              name="box182_Material_#1313_0"
                              castShadow
                              receiveShadow
                              geometry={
                                nodes["box182_Material_#1313_0"].geometry
                              }
                              material={materials.Material_1313}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="box183" position={[-64.243, 0, -17.457]}>
                    <mesh
                      name="box183_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box183_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                    <group name="box184" position={[0.006, 0, 0]}>
                      <mesh
                        name="box184_Material_#1315_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box184_Material_#1315_0"].geometry}
                        material={materials.Material_1315}
                      />
                      <group name="box185" position={[65.559, 0, 30.92]}>
                        <group
                          name="Object_381"
                          position={[-65.559, 0, -30.92]}
                        >
                          <mesh
                            name="box185_Material_#1313_0"
                            castShadow
                            receiveShadow
                            geometry={nodes["box185_Material_#1313_0"].geometry}
                            material={materials.Material_1313}
                          />
                        </group>
                      </group>
                    </group>
                    <group
                      name="box186"
                      position={[77.205, 0, 34.421]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={26.011}
                    >
                      <group name="Object_384" position={[0, -0.07, -0.54]}>
                        <mesh
                          name="box186_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box186_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box187"
                      position={[77.205, 0, 33.745]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={26.011}
                    >
                      <group name="Object_387" position={[0, -0.07, -0.54]}>
                        <mesh
                          name="box187_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box187_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box188"
                      position={[105.971, 13.636, 30.469]}
                      rotation={[0, 1.396, 0]}
                    >
                      <mesh
                        name="box188_Material_#1315_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box188_Material_#1315_0"].geometry}
                        material={materials.Material_1315}
                      />
                    </group>
                  </group>
                  <group
                    name="box189"
                    position={[63.478, -15.219, 6.734]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.589}
                  >
                    <mesh
                      name="box189_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box189_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                    <group
                      name="box190"
                      position={[0, 0, 1.895]}
                      rotation={[1.571, -1.396, 1.571]}
                    >
                      <mesh
                        name="box190_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box190_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                  </group>
                  <group name="box191" position={[67.005, 0, 2.234]}>
                    <mesh
                      name="box191_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box191_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                  </group>
                  <group name="box192" position={[-2.75, 25.68, -1.204]}>
                    <group
                      name="Object_398"
                      position={[-61.486, -25.68, -16.253]}
                    >
                      <mesh
                        name="box192_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box192_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group name="box193" position={[-61.493, -25.68, -16.253]}>
                      <mesh
                        name="box193_Material_#1315_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box193_Material_#1315_0"].geometry}
                        material={materials.Material_1315}
                      />
                    </group>
                    <group
                      name="box194"
                      position={[26.986, -51.919, 6.937]}
                      rotation={[Math.PI, 0, -Math.PI / 2]}
                      scale={-26.011}
                    >
                      <group
                        name="Object_403"
                        position={[0.057, -1.185, -0.247]}
                      >
                        <mesh
                          name="box194_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box194_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group name="box195" position={[-61.493, -25.68, -16.253]}>
                      <mesh
                        name="box195_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box195_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box196"
                      position={[-13.526, -57.549, 3.469]}
                      rotation={[Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name="box196_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box196_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group name="box197" position={[-61.486, -25.68, -16.253]}>
                      <mesh
                        name="box197_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box197_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                      <group
                        name="box198"
                        position={[90.856, -23.272, 20.414]}
                        rotation={[0.007, 1.569, -0.008]}
                      >
                        <mesh
                          name="box198_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box198_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group name="box199" position={[-61.486, -25.68, -16.253]}>
                      <mesh
                        name="box199_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box199_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box200"
                      position={[26.986, -51.919, 6.937]}
                      rotation={[Math.PI, 0, -Math.PI / 2]}
                      scale={-26.011}
                    >
                      <group
                        name="Object_416"
                        position={[0.057, -1.185, -0.247]}
                      >
                        <mesh
                          name="box200_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box200_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box201"
                      position={[24.868, -47.229, 7.765]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name="box201_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box201_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box202"
                      position={[17.491, -47.229, 5.784]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <mesh
                        name="box202_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box202_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box203"
                      position={[0.103, 0, -3.309]}
                      rotation={[-0.001, -0.001, -2.007]}
                      scale={[0.392, 0.392, 0.338]}
                    >
                      <group
                        name="Object_423"
                        position={[-3.931, 0.688, -0.259]}
                      >
                        <mesh
                          name="box203_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box203_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="box204"
                    position={[-2.647, -25.68, -5.544]}
                    rotation={[0, 0, 0.008]}
                  >
                    <group
                      name="Object_426"
                      position={[-61.396, 26.151, -11.884]}
                      rotation={[0, 0, -0.008]}
                    >
                      <mesh
                        name="box204_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box204_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box205"
                      position={[-61.402, 26.151, -11.884]}
                      rotation={[0, 0, -0.008]}
                    >
                      <mesh
                        name="box205_Material_#1315_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box205_Material_#1315_0"].geometry}
                        material={materials.Material_1315}
                      />
                    </group>
                    <group
                      name="box206"
                      position={[26.883, -0.767, 11.268]}
                      rotation={[-3.141, 0, -1.563]}
                      scale={-26.011}
                    >
                      <group
                        name="Object_431"
                        position={[0.057, -1.185, -0.247]}
                      >
                        <mesh
                          name="box206_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box206_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box207"
                      position={[-61.402, 26.151, -11.884]}
                      rotation={[0, 0, -0.008]}
                    >
                      <mesh
                        name="box207_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box207_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box208"
                      position={[-13.673, -6.088, 7.812]}
                      rotation={[1.57, -0.008, 0]}
                    >
                      <mesh
                        name="box208_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box208_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box209"
                      position={[-61.396, 26.151, -11.884]}
                      rotation={[0, 0, -0.008]}
                    >
                      <mesh
                        name="box209_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box209_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                      <group
                        name="box210"
                        position={[90.87, -23.283, 20.338]}
                        rotation={[-0.019, 1.57, 0.019]}
                      >
                        <mesh
                          name="box210_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box210_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box211"
                      position={[-61.396, 26.151, -11.884]}
                      rotation={[0, 0, -0.008]}
                    >
                      <mesh
                        name="box211_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box211_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box212"
                      position={[26.883, -0.767, 11.268]}
                      rotation={[-3.141, 0, -1.563]}
                      scale={-26.011}
                    >
                      <group
                        name="Object_444"
                        position={[0.057, -1.185, -0.247]}
                      >
                        <mesh
                          name="box212_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box212_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                    <group
                      name="box213"
                      position={[24.8, 3.938, 12.099]}
                      rotation={[-1.571, 0.008, 0]}
                    >
                      <mesh
                        name="box213_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box213_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box214"
                      position={[17.423, 3.995, 10.12]}
                      rotation={[-1.571, 0.008, 0]}
                    >
                      <mesh
                        name="box214_Material_#1313_0"
                        castShadow
                        receiveShadow
                        geometry={nodes["box214_Material_#1313_0"].geometry}
                        material={materials.Material_1313}
                      />
                    </group>
                    <group
                      name="box215"
                      position={[0, 0, 1.031]}
                      rotation={[-3.141, 0, 1.142]}
                      scale={[-0.392, -0.392, -0.338]}
                    >
                      <group
                        name="Object_451"
                        position={[-3.931, 0.688, -0.259]}
                      >
                        <mesh
                          name="box215_Material_#1313_0"
                          castShadow
                          receiveShadow
                          geometry={nodes["box215_Material_#1313_0"].geometry}
                          material={materials.Material_1313}
                        />
                      </group>
                    </group>
                  </group>
                  <group
                    name="box216"
                    position={[66.601, -17.238, 4.595]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[1.077, 1.077, 0.751]}
                  >
                    <mesh
                      name="box216_Material_#1313_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box216_Material_#1313_0"].geometry}
                      material={materials.Material_1313}
                    />
                    <mesh
                      name="box216_Material_#1350_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["box216_Material_#1350_0"].geometry}
                      material={materials.Material_1350}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/airtsel_valor_proiettile.glb");
