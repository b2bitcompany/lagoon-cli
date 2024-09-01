const command = {
  name: 'generate:module',
  description: 'Generate a new module in src/modules folder',
  run: async (toolbox) => {
    const { print, parameters, createFiles } = toolbox

    const flags = parameters.options

    const name = parameters.first

    const basePath = 'src/modules'

    if (!name) {
      print.error('Please provide a module name')
      return
    }

    if (!flags.nested) {
      await createFiles(basePath, name)

      return
    }

    const { path } = await toolbox.prompt.ask([
      {
        type: 'input',
        name: 'path',
        message: 'Enter the module path to be created:',
      },
    ])

    await createFiles(`${basePath}/${path}`, name)
  },
}

module.exports = command
