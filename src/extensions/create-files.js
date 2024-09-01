module.exports = async (toolbox) => {
  const { template, filesystem } = toolbox

  const createFiles = async (basePath, name) => {
    if (filesystem.exists(`${basePath}/${name}`)) {
      print.error('Module already exists')
      return
    }

    filesystem.dir(`${basePath}/${name}/views`)
    filesystem.dir(`${basePath}/${name}/utils`)
    filesystem.dir(`${basePath}/${name}/components`)

    await template.generate({
      template: 'contexts.tsx.ejs',
      target: `${basePath}/${name}/contexts/${name}Context.tsx`,
      props: { name },
    })

    await template.generate({
      template: 'controllers.tsx.ejs',
      target: `${basePath}/${name}/controllers/${name}Controller.tsx`,
      props: { name },
    })

    await template.generate({
      template: 'hooks.ts.ejs',
      target: `${basePath}/${name}/hooks/${name}Hook.tsx`,
      props: { name },
    })
  }

  toolbox.createFiles = createFiles
}
