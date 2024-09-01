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

    await template.generate({
      template: 'contexts.tsx.ejs',
      target: `${basePath}/${parameters.first}/contexts/${parameters.first}Context.tsx`,
      props: { name: parameters.first },
    })

    await template.generate({
      template: 'controllers.tsx.ejs',
      target: `${basePath}/${parameters.first}/controllers/${parameters.first}Controller.tsx`,
      props: { name: parameters.first },
    })

    await template.generate({
      template: 'hooks.ts.ejs',
      target: `${basePath}/${parameters.first}/hooks/${parameters.first}Hook.tsx`,
      props: { name: parameters.first },
    })
  },
}

module.exports = command
