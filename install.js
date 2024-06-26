module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://huggingface.co/spaces/cocktailpeanut/paligemma app",
        ]
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
//          "pip install gradio devicetorch",
//          "{{gpu === 'nvidia' ? 'pip install jax[cuda12]' : 'pip install jax[cpu]'}}",
          "{{gpu === 'nvidia' ? 'pip install -r requirements.txt' : 'pip install -r requirements-cpu.txt'}}",
          "pip install tensorflow_io_gcs_filesystem",
//          "pip install jax-metal tensorflow-metal ml-dtypes"
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    },
    {
      method: "notify",
      params: {
        html: "Click the 'start' tab to get started!"
      }
    }
  ]
}
