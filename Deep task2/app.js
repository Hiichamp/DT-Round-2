// Sample JSON data
const projectData = {
    "title": "Technical Project Management",
    "description": "You can learn project management by applying the simple methods of project management.",
    "project_image": "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    "tasks": [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion.",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment, Scope of Agility, Specific Accountable, Staggering Approach",
                    "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching that video."
                }
            ]
        }
    ]
};

// Reusable function to create asset container
function createAsset(asset) {
    return `
        <div class="asset">
            <p class="asset-title">${asset.asset_title}</p>
            <p>${asset.asset_description}</p>
            ${asset.asset_content ? `<a href="${asset.asset_content}" target="_blank">View Content</a>` : ""}
        </div>
    `;
}

// Reusable function to create task container
function createTask(task) {
    const assetsHTML = task.assets.map(createAsset).join("");
    return `
        <div class="task">
            <h3>${task.task_title}</h3>
            <p>${task.task_description}</p>
            <div class="assets-container">
                ${assetsHTML}
            </div>
        </div>
    `;
}

// Render project data
document.addEventListener("DOMContentLoaded", () => {
    // Set project details
    document.getElementById("project-title").textContent = projectData.title;
    document.getElementById("project-description").textContent = projectData.description;
    document.getElementById("project-image").src = projectData.project_image;

    // Render tasks
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = projectData.tasks.map(createTask).join("");
});


// result is

('/mnt/data/dynamic_project_renderer.html',
    '/mnt/data/styles.css',
    '/mnt/data/app.js')