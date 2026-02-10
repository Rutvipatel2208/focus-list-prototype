# Focus List

**Focus List** is a productivity-focused task management application designed to help users *actually complete tasks*, not just list them. Instead of overwhelming users with endless to-do lists, Focus List enforces structure, prioritization, and single-task focus—turning intention into execution.
**Focus List exists to reduce cognitive overload and guide users toward focused, intentional work.**

## Problem We’re Solving
Most to-do apps are great at collecting tasks… and terrible at helping users finish them.

Common issues users face:

* All tasks look equally important → decision fatigue
* Large or vague tasks lead to procrastination
* No insight into real productivity behavior
* Tools focus on task *entry*, not task *execution.

## Target User Persona

### Primary Users

* Students and young professionals (18–30)
* Managing academic, personal, and work-related tasks

### Behaviors & Needs

* Quickly writes tasks but skips prioritization
* Avoids high-effort tasks
* Wants guidance on *what to do next*
* Values clarity, progress, and visual feedback

## User Flow (End-to-End)

Add Task → Assign Effort → View Task List → Enter Focus Mode → Complete Task → View Progress


## Acceptance Criteria & Core Flows

###  Task Creation

* Task **must** include:

 * Title
 * Effort level (Low / Medium / High)
 * Due date is optional
 * Task cannot be saved without required fields


###  Task List View

Tasks are automatically grouped into:

* **Today**
* **Upcoming**
* **Completed**

Each task displays:

* Title
* Effort level
* Due date
* Status

Completed tasks move automatically to **Completed**.


###  Focus Mode (Core Differentiator)

* Only **one task** can be active at a time
* All other tasks are hidden
* Use

  **Functional Requirements**

* Create, update, and delete tasks
* Assign effort level and category
* View tasks by Today, Upcoming, Completed
* Enter and exit Focus Mode
* Mark tasks as completed
* Filter tasks by category
* View daily task summary

**Non-Functional Requirements**

* Response time under 2 seconds
* Support at least 10,000 users
* Secure data storage
* Minimal, distraction-free UI
* Scalable and modular backend

 **Assumptions**

* Users are motivated to improve productivity
* Primary usage is on mobile devices
* Internet connectivity is generally available

 **Excluded** (Out-of-Scope)
 
 * Team collaboration
 * File uploads
 * Calendar integration
 * Notifications
 * AI-based task suggestions

   **Success Metrics**

 * Ask completion rate
 *  Average time from task creation to completion
 * Percentage of tasks with effort level assigned
 * Daily active users (DAU)
 * Focus Mode usage rate
 * Repeat user retention

**Architectural Diagram**

Frontend → API Layer → Task Service → Data Store

## Future Ideas & Hypotheses

These ideas are intentionally listed as experiments, not committed features.

- **Gamified Focus Mode**  
  *Hypothesis:* Rewards and streaks increase Focus Mode usage and retention  
  *Metrics:* Focus sessions per user, 7-day retention

- **Mood & Energy Tagging**  
  *Hypothesis:* Users complete more high-effort tasks during high-energy periods  
  *Metrics:* Completion rate by mood/energy level

- **Micro-task Suggestions**  
  *Hypothesis:* Breaking tasks into 5–10 minute actions reduces procrastination  
  *Metrics:* Time-to-first-action, task completion rate

   

