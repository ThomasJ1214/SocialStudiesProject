// Toggle the hamburger menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('hidden');
}

// Three.js 3D Model Rendering with Orbit Controls
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 500);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Lighting
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
scene.add(ambientLight);

// Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Smooth motion
controls.dampingFactor = 0.1;
controls.enableZoom = true; // Allow zooming
controls.enablePan = true;  // Allow panning

// Load STL Model
const loader = new THREE.STLLoader();
loader.load('model.stl', function (geometry) {
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Center and scale the model
    geometry.center(); // Center the model at (0, 0, 0)
    mesh.scale.set(0.3, 0.3, 0.3); // Scale down to fit the view
    mesh.rotation.x = -Math.PI / 2; // Rotate to face upward
});

// Adjust Camera Position
camera.position.set(0, 5, 10); // Move the camera back and up
camera.lookAt(0, 0, 0); // Ensure the camera is looking at the model

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // Update the orbit controls
    renderer.render(scene, camera);
}
animate();
