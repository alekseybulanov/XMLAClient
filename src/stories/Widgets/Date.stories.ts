/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import type { Meta, StoryObj } from "@storybook/vue3";

import DateControl from '@/components/Controls/DateInput/DateControl.vue';
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof DateControl> = {
  title: "Widget/StaticWidgets/DateControl",
  component: DateControl,
  tags: ["autodocs"],
  decorators: [
    () => ({
      template: '<div style="width: 300px; height: 100px; background-color: #fafafa; padding: 20px; color: black;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    label: 'Next page',
    availableEvents: ["Click", "Clear", "Blur", "Focus"],
    events: [{ name: 'Next page', trigger: 'Click' }],
  },
};
