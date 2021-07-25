import type { Plugin } from "./Plugin";

export class PluginOne implements Plugin {
    execute() {
        console.log('PluginOne executing');
    }
}