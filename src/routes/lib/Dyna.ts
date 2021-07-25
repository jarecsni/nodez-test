import type { Plugin } from "./plugins/Plugin";

export class Dyna {
    plugins: { [key: string]: Plugin; } = {}; 
    
    async loadPlugin(name: string) {
        const module = await import(`./plugins/${name}.ts`);
        const plugin = new module[name]();
        if (this.isPlugin(plugin)) {
            return plugin;
        } else {
            throw Error(`Module ${name} is not a Plugin`);
        }
    }

    isPlugin(module: any): module is Plugin {
        return module && module.execute && typeof(module.execute) === 'function';
    }
}
