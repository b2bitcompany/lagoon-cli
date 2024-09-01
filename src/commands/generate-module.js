const command = {
  name: 'generate:module',
  description: 'Generate a new module in src/modules folder',
  run: async (toolbox) => {
    const { print, parameters, template, filesystem } = toolbox

    const basePath = 'src/modules'

    if (!parameters.first) {
      print.error('Please provide a module name')
      return
    }

    if (filesystem.exists(`src/modules/${parameters.first}`)) {
      print.error('Module already exists')
      return
    }

    filesystem.dir(`${basePath}/${parameters.first}/controllers`)
    filesystem.dir(`${basePath}/${parameters.first}/views`)
    filesystem.dir(`${basePath}/${parameters.first}/hooks`)
    filesystem.dir(`${basePath}/${parameters.first}/utils`)
    filesystem.dir(`${basePath}/${parameters.first}/components`)
    filesystem.dir(`${basePath}/${parameters.first}/contexts`)

    // await template.generate({
    //   template: '',
    // })
  },
}

module.exports = command
