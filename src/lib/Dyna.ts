import type { Plugin } from "./plugins/Plugin";

export class Dyna {
    plugins: { [key: string]: Plugin; } = {}; 
    moduleLoadPromise: Promise<Plugin>;
    async loadPlugin(name: string) {
        this.moduleLoadPromise = import(`./plugins/${name}.ts`);
        const module = await this.moduleLoadPromise;
        const plugin = new module[name]();
        if (this.isPlugin(plugin)) {
            this.plugins[name] = plugin;
            return plugin;
        } else {
            throw Error(`Module ${name} is not a Plugin`);
        }
    }

    isPlugin(module: any): module is Plugin {
        return module && module.execute && typeof(module.execute) === 'function';
    }

    async execute(name: string) {
        if (!this.plugins[name]) {
            this.loadPlugin(name);
        }
        await this.moduleLoadPromise;
        this.plugins[name].execute();
    }
 }
