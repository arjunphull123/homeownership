import * as THREE from 'three'
import gsap from 'gsap'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

//Data
const data = {
  White: {
      1994: 0.677,
      1995: 0.687,
      1996: 0.691,
      1997: 0.693,
      1998: 0.70,
      1999: 0.705,
      2000: 0.711,
      2001: 0.716,
      2002: 0.717,
      2003: 0.721,
      2004: 0.728,
      2005: 0.727,
      2006: 0.726,
      2007: 0.720,
      2008: 0.717,
      2009: 0.714,
      2010: 0.71,
      2011: 0.703,
      2012: 0.698,
      2013: 0.696,
      2014: 0.689,
      2015: 0.682,
      2016: 0.682,
      2017: 0.685,
      2018: 0.692,
      2019: 0.694,
      2020: 0.713,
      2021: 0.701
  },
  Black: {
      1994: 0.423,
      1995: 0.427,
      1996: 0.441,
      1997: 0.448,
      1998: 0.456,
      1999: 0.463,
      2000: 0.472,
      2001: 0.477,
      2002: 0.474,
      2003: 0.481,
      2004: 0.491,
      2005: 0.482,
      2006: 0.479,
      2007: 0.472,
      2008: 0.474,
      2009: 0.462,
      2010: 0.454,
      2011: 0.449,
      2012: 0.439,
      2013: 0.431,
      2014: 0.43,
      2015: 0.423,
      2016: 0.416,
      2017: 0.423,
      2018: 0.421,
      2019: 0.421,
      2020: 0.453,
      2021: 0.442
  },
  Native: {
      1994: 0.517,
      1995: 0.558,
      1996: 0.516,
      1997: 0.517,
      1998: 0.543,
      1999: 0.561,
      2000: 0.562,
      2001: 0.554,
      2002: 0.54,
      2003: 0.543,
      2004: 0.556,
      2005: 0.582,
      2006: 0.582,
      2007: 0.569,
      2008: 0.565,
      2009: 0.562,
      2010: 0.523,
      2011: 0.535,
      2012: 0.511,
      2013: 0.51,
      2014: 0.522,
      2015: 0.503,
      2016: 0.476,
      2017: 0.508,
      2018: 0.539,
      2019: 0.508,
      2020: 0.542,
      2021: 0.551
  },
  Asian: {
      1994: 0.513,
      1995: 0.508,
      1996: 0.508,
      1997: 0.528,
      1998: 0.526,
      1999: 0.531,
      2000: 0.528,
      2001: 0.539,
      2002: 0.546,
      2003: 0.563,
      2004: 0.598,
      2005: 0.601,
      2006: 0.608,
      2007: 0.60,
      2008: 0.595,
      2009: 0.593,
      2010: 0.589,
      2011: 0.58,
      2012: 0.566,
      2013: 0.574,
      2014: 0.573,
      2015: 0.561,
      2016: 0.554,
      2017: 0.572,
      2018: 0.579,
      2019: 0.577,
      2020: 0.603,
      2021: 0.599
  },
  Hispanic: {
      1994: 0.412,
      1995: 0.421,
      1996: 0.428,
      1997: 0.433,
      1998: 0.447,
      1999: 0.455,
      2000: 0.463,
      2001: 0.473,
      2002: 0.47,
      2003: 0.467,
      2004: 0.481,
      2005: 0.495,
      2006: 0.497,
      2007: 0.497,
      2008: 0.491,
      2009: 0.484,
      2010: 0.475,
      2011: 0.469,
      2012: 0.461,
      2013: 0.461,
      2014: 0.454,
      2015: 0.456,
      2016: 0.46,
      2017: 0.462,
      2018: 0.471,
      2019: 0.475,
      2020: 0.501,
      2021: 0.484
  }
}

/*
LEGEND:
  White: blueHouse,
  Hispanic: pinkHouse,
  Black: brownHouse,
  Native: goldHouse,
  Asian: redHouse


Notes:
- How can I change the increment by which the houses scale? Want to almost exaggerate the difference a bit.
- Could we throw the neighborhood into 8th wall? If so, can we add a slider?
*/

//Scene
const scene = new THREE.Scene()
const loader = new GLTFLoader()
loader.setPath('/assets/')

//const axesHelper = new THREE.AxesHelper( 10 );
//scene.add( axesHelper );

let scaleFactor = 2

const blueHouse = new THREE.Group()
blueHouse.position.set(-0.675, 0.2, 0.427)
blueHouse.rotateY(1.98968)
scene.add(blueHouse)
loader.load('blue_house.gltf', function( gltf ) {
  gltf.scene.translateZ(-1.45 * scaleFactor)
  gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor)
  blueHouse.add(gltf.scene)
})

const brownHouse = new THREE.Group()
brownHouse.position.set(0, 0.2, -0.75)
scene.add(brownHouse)
loader.load('brown_house.gltf', function( gltf ) {
  gltf.scene.translateZ(-1.665 * scaleFactor)
  gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor)
  brownHouse.add(gltf.scene)
})

const redHouse = new THREE.Group()
redHouse.position.set(0.675, 0.2, 0.327)
redHouse.rotateY(-1.98968)
scene.add(redHouse)
loader.load('red_house.gltf', function( gltf ) {
  gltf.scene.translateZ(-1.665 * scaleFactor)
  gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor)
  redHouse.add(gltf.scene)
})

const goldHouse = new THREE.Group()
goldHouse.position.set(0.675, 0.2, -0.327)
goldHouse.rotateY(-0.994838)
scene.add(goldHouse)
loader.load('gold_house.gltf', function( gltf ) {
  gltf.scene.translateZ(-1.665 * scaleFactor)
  gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor)
  goldHouse.add(gltf.scene)
})

const pinkHouse = new THREE.Group()
pinkHouse.position.set(-0.675, 0.2, -0.327)
pinkHouse.rotateY(0.994838)
scene.add(pinkHouse)
loader.load('pink_house.gltf', function( gltf ) {
  gltf.scene.translateZ(-1.665 * scaleFactor)
  gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor)
  pinkHouse.add(gltf.scene)
})

const culDeSac = new THREE.Object3D()
scene.add(culDeSac)
loader.load('culdesac.gltf', function( gltf ) {
  culDeSac.add(gltf.scene)
})

culDeSac.scale.set(0.9, 1, 0.9)

scene.children.forEach((child) => child.translateY(0.5))

//Give the houses names
blueHouse.name = 'White'
brownHouse.name = 'Black'
pinkHouse.name = 'Hispanic'
goldHouse.name = 'Native'
redHouse.name = 'Asian'


//Slider controls
var yearSlider = document.getElementById("yearSlider");
var valueLabel = document.getElementById("valueLabel");
valueLabel.innerHTML = yearSlider.value;

let currentYear

//Scale functionality
function scaleHouse(house) {
  const newScale = data[house.name][currentYear]
  gsap.to(house.scale, 1, {x: newScale, y: newScale, z: newScale})
}

function updateHouses() {
  scaleHouse(blueHouse)
  scaleHouse(brownHouse)
  scaleHouse(pinkHouse)
  scaleHouse(goldHouse)
  scaleHouse(redHouse)
}

//Initialize house sizes:
function initSize(house) {
  house.scale.set(data[house.name][1994], data[house.name][1994], data[house.name][1994])
}

initSize(blueHouse)
initSize(brownHouse)
initSize(pinkHouse)
initSize(goldHouse)
initSize(redHouse)


document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37) {
      yearSlider.value--;
      valueLabel.innerHTML = yearSlider.value;
      currentYear = yearSlider.value
      updateHouses()
    }
    else if (event.keyCode === 39) {
      yearSlider.value++;
      valueLabel.innerHTML = yearSlider.value;
      currentYear = yearSlider.value
      updateHouses()
    }
});

yearSlider.addEventListener("input", function(){
  valueLabel.innerHTML = yearSlider.value;
  currentYear = this.value
  updateHouses()
});

yearSlider.addEventListener("mousedown", function() {
  valueLabel.classList.add("scaleUp");
})

yearSlider.addEventListener("mouseup", function() {
    valueLabel.classList.remove("scaleUp");
})

var buttons = document.querySelectorAll(".toggle");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}



//HOVER?
//Hover
var raycaster = new THREE.Raycaster()
var mouse = new THREE.Vector2()

var hoveredObject
var hoverScale = 1.1
var hoverLift = 0

//document.addEventListener('mousemove', onMouseMove, false)
//const totalBooks = document.querySelector("#totalBooks");
//const blackBooks = document.querySelector("#blackBooks");

function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera)
  var intersects = raycaster.intersectObjects(scene.children)
  
  if (intersects.length > 0) { // if there is an intersection
    var object = intersects[0].object
    while (object.parent.parent != null) {
      object = object.parent
    }
    if (object !== hoveredObject) {
      if (hoveredObject) {
        gsap.to(hoveredObject.scale, 0.25, {x: hoveredObject.scale / hoverScale, y: hoveredObject.scale / hoverScale, z: hoveredObject.scale / hoverScale})
      }
      hoveredObject = object
      gsap.to(hoveredObject.scale, 0.25, {x: hoveredObject.scale * hoverScale, y: hoveredObject.scale * hoverScale, z: hoveredObject.scale * hoverScale})
      console.log(hoveredObject.name)
    }
  } else {
    if (hoveredObject) {
      gsap.to(hoveredObject.scale, 0.25, {x: hoveredObject.scale / hoverScale, y: hoveredObject.scale / hoverScale, z: hoveredObject.scale / hoverScale})
      hoveredObject = null
    }
  }
}

//Light
const ptLight = new THREE.PointLight(0xffffff, 0.75, 100)
ptLight.position.set(0, 10, 10)
scene.add(ptLight)

const backLight = new THREE.PointLight(0xffffff, 0.25, 100)
backLight.position.set(0, -10, -10)
scene.add(backLight)

const ambLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambLight)



//Renderer
const canvas = document.querySelector('#contentWindow')

//Sizes
const sizes = {
  width: canvas.clientWidth,
  height: canvas.clientHeight,
}

//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 5.880735/1.5, 11.026378/1.5)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({canvas}, {alpha: true})
renderer.setClearColor ( 0x000000, 0)
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.render(scene, camera)

//Controls
const controls = new OrbitControls(camera, canvas) // experiment with other controls in import statement?
//controls.enableDamping = true
//controls.enableZoom = false
controls.enablePan = false
//controls.autoRotate = true
controls.autoRotateSpeed = 5

var ARbutton = document.getElementById("autoRotate");
ARbutton.addEventListener("click", toggleAutoRotate)

function toggleAutoRotate() {
  ARbutton.classList.toggle('active')
  if (ARbutton.classList.contains("active")) {
    console.log("Auto rotate on");
    console.log(camera.position)
    controls.autoRotate = true
  } else {
    console.log("Auto rotate off");
    controls.autoRotate = false
    console.log(camera.position)
  }
}

var resetRotButton = document.getElementById("resetRotate");
resetRotButton.addEventListener("click", resetRotation);

function resetRotation() {
  const currentX = camera.position.x
  const currentY = camera.position.y
  const currentZ = camera.position.z
  const distance = (currentX**2 + currentY**2 + currentZ**2)**0.5
  const newX = 0
  const newY = currentY
  const newZ = (distance**2 - newX**2 - newY**2)**0.5
  camera.position.set(newX, newY, newZ)
  console.log(camera.position)
}

var resetPosButton = document.getElementById("resetPosition");
resetPosButton.addEventListener("click", resetPosition);

function resetPosition() {
  camera.position.set(0, 5.880735/1.5, 11.026378/1.5)
}


var birdsEyeButton = document.getElementById("birdsEye");
birdsEyeButton.addEventListener("click", birdsEyeView);

function birdsEyeView() {
  const currentX = camera.position.x
  const currentY = camera.position.y
  const currentZ = camera.position.z
  const newX = currentX/100000
  const newY = 10
  const newZ = currentZ/100000
  camera.position.set(newX, newY, newZ)
}

//Resize
window.addEventListener('resize', () => {
    sizes.width = canvas.clientWidth
    sizes.height = canvas.clientHeight
    
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
})

// update stat lines
var statHead = document.getElementById("statHead")
var whiteStat = document.getElementById("white-stat")
var hispanicStat = document.getElementById("hispanic-stat")
var blackStat = document.getElementById("black-stat")
var nativeStat = document.getElementById("native-stat")
var asianStat = document.getElementById("asian-stat")

function updateStats() {
  const year = yearSlider.value
  statHead.textContent = "Homeownership rates in " + year + ":"
  whiteStat.textContent = "White Americans: " + Math.round((data['White'][year] * 100)*10)/10 + "%"
  hispanicStat.textContent = "Hispanic Americans: " + Math.round((data['Hispanic'][year] * 100)*10)/10 + "%"
  blackStat.textContent = "Black Americans: " + Math.round((data['Black'][year] * 100)*10)/10 + "%"
  nativeStat.textContent = "Native Americans: " + Math.round((data['Native'][year] * 100)*10)/10 + "%"
  asianStat.textContent = "Asian Americans: " + Math.round((data['Asian'][year] * 100)*10)/10 + "%"
}


//Loop
const loop = () => {
  controls.update()
  updateStats()
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}
loop()