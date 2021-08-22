const common = require("./common")
// @ponicode
describe("common.getView", () => {
    test("0", async () => {
        await common.getView(false)
    })

    test("1", async () => {
        await common.getView(true)
    })

    test("2", async () => {
        await common.getView(undefined)
    })
})

// @ponicode
describe("common.getAll", () => {
    test("0", async () => {
        await common.getAll()
    })
})

// @ponicode
describe("common.getById", () => {
    test("0", async () => {
        await common.getById({ key3: -5.48 })
    })

    test("1", async () => {
        await common.getById({ key3: 0 })
    })

    test("2", async () => {
        await common.getById({ key3: 100 })
    })

    test("3", async () => {
        await common.getById({ key3: 1 })
    })

    test("4", async () => {
        await common.getById({ key3: -100 })
    })

    test("5", async () => {
        await common.getById(undefined)
    })
})

// @ponicode
describe("common.deleteById", () => {
    test("0", async () => {
        await common.deleteById("project_secret_")
    })

    test("1", async () => {
        await common.deleteById("fake_project_id")
    })

    test("2", async () => {
        await common.deleteById("projects/")
    })

    test("3", async () => {
        await common.deleteById("fake_project")
    })

    test("4", async () => {
        await common.deleteById("projectId-1969970175")
    })

    test("5", async () => {
        await common.deleteById(undefined)
    })
})

// @ponicode
describe("common.createViews", () => {
    test("0", async () => {
        await common.createViews()
    })
})

// @ponicode
describe("common.createIndexes", () => {
    test("0", async () => {
        await common.createIndexes()
    })
})
