/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import type { Meta, StoryObj } from "@storybook/vue3";

import ProgressWidget from '@/components/Widgets/Progress/ProgressWidget.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Widget/StaticWidgets/Progress",
  component: ProgressWidget,
  tags: ["autodocs"],
} as Meta<typeof ProgressWidget>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    progress: 50,
    fillColor: {
      backgroundColor: '#00FF00',
      backgroundGradient: '#00FF00 0, #FAFAFA 85%'
    },
    backgroundColor: "#d3d3d3",
    isGradient: false,
    isVertical: false,
    rotation: 90,
  },
};
